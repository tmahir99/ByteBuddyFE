import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
    Observable,
    forkJoin,
    map,
    of,
    shareReplay,
    switchMap,
    throwError,
} from 'rxjs'
import { AuthService } from '../auth.service'
import { CodeSnippet, PagedResponse } from '../code-snippet'
import {
    ApplicationUserDto,
    FriendshipDto,
    FriendshipStatus,
    PageDto,
} from './profile.types'

export interface ProfileAggregatedResponse {
    user: ApplicationUserDto
    snippets: CodeSnippet[]
    pages: PageDto[]
    friendshipStatus: FriendshipStatus
    friendshipRequests?: FriendshipDto[]
}

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    private readonly baseUrl = 'https://5d3a83e6fb53.ngrok-free.app'
    private users$?: Observable<ApplicationUserDto[]>

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    getProfile(identifier: string): Observable<ProfileAggregatedResponse> {
        return this.getUserByIdentifier(identifier).pipe(
            switchMap((user) => {
                if (!user?.id) {
                    return throwError(() => new Error('User not found'))
                }

                return forkJoin({
                    user: of(user),
                    snippets: this.getUserSnippets(user.id),
                    pages: this.getUserPages(user.id),
                    friendshipStatus: this.getFriendshipStatus(user.id),
                })
            })
        )
    }

    getPublicProfile(
        identifier: string
    ): Observable<ProfileAggregatedResponse> {
        // Create a basic user object from identifier - we don't have access to full user info without admin permissions
        const basicUser: ApplicationUserDto = {
            id: identifier.includes('@') ? undefined : identifier, // If it looks like an ID, use it as ID
            userName: identifier.includes('@') ? identifier : undefined, // If it looks like username, use as username
            firstName: undefined, // We don't have access to these details for other users
            lastName: undefined,
            fullName: identifier, // Use identifier as display name fallback
        }

        return forkJoin({
            user: of(basicUser),
            snippets: this.getUserSnippets(identifier), // Use identifier directly
            pages: this.getUserPages(identifier), // Use identifier directly
            friendshipStatus: this.getFriendshipStatus(identifier),
        })
    }

    getCurrentUserProfile(): Observable<ProfileAggregatedResponse> {
        const currentUserId = this.authService.getUserId()
        const currentUsername = this.authService.getUserUsername()

        if (!currentUserId || !currentUsername) {
            return throwError(() => new Error('User not logged in'))
        }

        // Build user object from locally stored auth data
        const firstName = this.authService.getUserName()
        const lastName = this.authService.getUserSurname()
        const currentUser: ApplicationUserDto = {
            id: currentUserId,
            userName: currentUsername,
            firstName: firstName || undefined,
            lastName: lastName || undefined,
            roles: this.authService.getUserRoles(),
            fullName: [firstName, lastName].filter(Boolean).join(' '),
        }

        return forkJoin({
            user: of(currentUser),
            snippets: this.getUserSnippets(currentUserId),
            pages: this.getUserPages(currentUserId),
            friendshipStatus: of<FriendshipStatus>('friends'),
            friendshipRequests: this.getIncomingFriendRequests(),
        })
    }

    sendFriendRequest(userId: string): Observable<FriendshipDto> {
        return this.http.post<FriendshipDto>(
            `${this.baseUrl}/api/Friendships/send-request/${userId}`,
            null,
            { headers: this.buildAuthHeaders(), withCredentials: true }
        )
    }

    acceptFriendRequest(requesterId: string): Observable<FriendshipDto> {
        return this.http.post<FriendshipDto>(
            `${this.baseUrl}/api/Friendships/accept-request/${requesterId}`,
            null,
            { headers: this.buildAuthHeaders(), withCredentials: true }
        )
    }

    declineFriendRequest(requesterId: string): Observable<unknown> {
        return this.http.post(
            `${this.baseUrl}/api/Friendships/decline-request/${requesterId}`,
            null,
            { headers: this.buildAuthHeaders(), withCredentials: true }
        )
    }

    private getAllUsers(): Observable<ApplicationUserDto[]> {
        if (!this.users$) {
            this.users$ = this.http
                .get<
                    ApplicationUserDto[]
                >(`${this.baseUrl}/api/Auth/GetAllUsers`, { headers: this.buildAuthHeaders(), withCredentials: true })
                .pipe(shareReplay(1))
        }
        return this.users$
    }

    private getUserByIdentifier(
        identifier: string
    ): Observable<ApplicationUserDto | undefined> {
        const normalized = identifier.toLowerCase()
        return this.getAllUsers().pipe(
            map((users) =>
                users.find(
                    (user) =>
                        user.id?.toLowerCase() === normalized ||
                        user.userName?.toLowerCase() === normalized
                )
            )
        )
    }

    private getUserSnippets(userId: string): Observable<CodeSnippet[]> {
        return this.http
            .get<
                PagedResponse<CodeSnippet>
            >(`${this.baseUrl}/api/CodeSnippets?CreatedById=${encodeURIComponent(userId)}`, { headers: this.buildAuthHeaders(), withCredentials: true })
            .pipe(map((response) => response.items || []))
    }

    private getUserPages(userId: string): Observable<PageDto[]> {
        return this.http.get<PageDto[]>(
            `${this.baseUrl}/api/Page/user/${encodeURIComponent(userId)}`,
            { headers: this.buildAuthHeaders(), withCredentials: true }
        )
    }

    private getFriendshipStatus(userId: string): Observable<FriendshipStatus> {
        const currentUserId =
            this.authService.getUserId() || this.authService.getUserUsername()

        if (!currentUserId || currentUserId === userId) {
            return of('friends')
        }

        return forkJoin({
            friends: this.getFriends(),
            incomingRequests: this.getIncomingFriendRequests(),
            outgoingRequests: this.getOutgoingFriendRequests(),
        }).pipe(
            map(({ friends, incomingRequests, outgoingRequests }) => {
                // Check if already friends
                if (
                    friends.some(
                        (friend) =>
                            friend.addresseeId === userId ||
                            friend.requesterId === userId
                    )
                ) {
                    return 'friends'
                }

                // Check if there's an incoming request from this user
                if (
                    incomingRequests.some(
                        (request) => request.requesterId === userId
                    )
                ) {
                    return 'incoming'
                }

                // Check if there's an outgoing request to this user
                if (
                    outgoingRequests.some(
                        (request) => request.addresseeId === userId
                    )
                ) {
                    return 'outgoing'
                }

                return 'none'
            })
        )
    }

    private getFriends(): Observable<FriendshipDto[]> {
        return this.http.get<FriendshipDto[]>(
            `${this.baseUrl}/api/Friendships/friends`,
            { headers: this.buildAuthHeaders(), withCredentials: true }
        )
    }

    private getIncomingFriendRequests(): Observable<FriendshipDto[]> {
        const currentUserId =
            this.authService.getUserId() || this.authService.getUserUsername()

        return this.http
            .get<
                FriendshipDto[]
            >(`${this.baseUrl}/api/Friendships/requests`, { headers: this.buildAuthHeaders(), withCredentials: true })
            .pipe(
                map((requests) =>
                    requests.filter(
                        (request) => request.addresseeId === currentUserId
                    )
                )
            )
    }

    private getOutgoingFriendRequests(): Observable<FriendshipDto[]> {
        // If there's a separate endpoint for outgoing requests, use it
        // Otherwise, we'll need to get all requests and filter them
        // For now, I'll assume the requests endpoint returns all requests and we filter by currentUserId
        const currentUserId =
            this.authService.getUserId() || this.authService.getUserUsername()

        return this.http
            .get<
                FriendshipDto[]
            >(`${this.baseUrl}/api/Friendships/requests`, { headers: this.buildAuthHeaders(), withCredentials: true })
            .pipe(
                map((requests) =>
                    requests.filter(
                        (request) => request.requesterId === currentUserId
                    )
                )
            )
    }

    searchUsers(query?: string): Observable<ApplicationUserDto[]> {
        if (query && query.trim()) {
            // For now, get active users and filter locally
            // This could be enhanced with a dedicated search endpoint later
            return this.getActiveUsers(50).pipe(
                map(
                    (users) =>
                        users
                            .filter(
                                (user) =>
                                    user.userName
                                        ?.toLowerCase()
                                        .includes(query.toLowerCase()) ||
                                    user.firstName
                                        ?.toLowerCase()
                                        .includes(query.toLowerCase()) ||
                                    user.lastName
                                        ?.toLowerCase()
                                        .includes(query.toLowerCase()) ||
                                    user.email
                                        ?.toLowerCase()
                                        .includes(query.toLowerCase())
                            )
                            .slice(0, 10) // Limit to 10 results
                )
            )
        } else {
            return this.getActiveUsers(10)
        }
    }

    private getActiveUsers(
        count: number = 10
    ): Observable<ApplicationUserDto[]> {
        return this.http.get<ApplicationUserDto[]>(
            `${this.baseUrl}/api/Search/active-users?count=${count}`,
            { headers: this.buildAuthHeaders(), withCredentials: true }
        )
    }

    private buildAuthHeaders(): HttpHeaders {
        const token = this.authService.getToken()
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        return new HttpHeaders(headers)
    }
}
