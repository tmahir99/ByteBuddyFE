import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
    Observable,
    catchError,
    forkJoin,
    map,
    of,
    shareReplay,
    switchMap,
    throwError,
} from 'rxjs'
import { AuthService } from '../auth.service'
import { CodeSnippet, PagedResponse } from '../code-snippet'
import { PageService } from '../page.service'
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
        private authService: AuthService,
        private pageService: PageService
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
        return this.getPublicUserInfo(identifier).pipe(
            switchMap((user) => {
                return forkJoin({
                    user: of(user),
                    snippets: this.getUserSnippets(identifier),
                    pages: this.getUserPages(identifier),
                    friendshipStatus: this.getFriendshipStatus(identifier),
                })
            })
        )
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
            snippets: this.getUserSnippets(currentUsername),
            pages: this.getUserPages(currentUsername),
            friendshipStatus: of<FriendshipStatus>('friends'),
            friendshipRequests: this.getIncomingFriendRequests(),
        })
    }

    /**
     * Get public user information using the new API endpoint
     */
    getPublicUserInfo(identifier: string): Observable<ApplicationUserDto> {
        const headers = new HttpHeaders({
            accept: 'text/plain',
            'ngrok-skip-browser-warning': 'true',
        })

        return this.http
            .get<ApplicationUserDto>(
                `${this.baseUrl}/api/Auth/public-user?user=${encodeURIComponent(identifier)}`,
                { headers }
            )
            .pipe(
                map((response) => {
                    // Map the response to our ApplicationUserDto interface
                    return {
                        id: response.id || undefined,
                        userName: response.userName,
                        firstName: response.firstName,
                        lastName: response.lastName,
                        email: response.email,
                        dateOfBirth: response.dateOfBirth,
                        gender: response.gender,
                        birthPlace: response.birthPlace,
                        address: response.address,
                        roles: response.roles,
                        fullName: response.fullName,
                    } as ApplicationUserDto
                })
            )
    }

    sendFriendRequest(userId: string): Observable<FriendshipDto> {
        const headers = new HttpHeaders({
            accept: 'text/plain',
            Authorization: `Bearer ${this.authService.getToken()}`,
            'ngrok-skip-browser-warning': 'true',
        })

        return this.http.post<FriendshipDto>(
            `${this.baseUrl}/api/Friendships/send-request/${userId}`,
            '', // Empty body as per curl example
            { headers, withCredentials: true }
        )
    }

    acceptFriendRequest(requesterId: string): Observable<FriendshipDto> {
        const headers = new HttpHeaders({
            accept: 'text/plain',
            Authorization: `Bearer ${this.authService.getToken()}`,
            'ngrok-skip-browser-warning': 'true',
        })

        return this.http.post<FriendshipDto>(
            `${this.baseUrl}/api/Friendships/accept-request/${requesterId}`,
            '',
            { headers, withCredentials: true }
        )
    }

    declineFriendRequest(requesterId: string): Observable<unknown> {
        const headers = new HttpHeaders({
            accept: 'text/plain',
            Authorization: `Bearer ${this.authService.getToken()}`,
            'ngrok-skip-browser-warning': 'true',
        })

        return this.http.post(
            `${this.baseUrl}/api/Friendships/decline-request/${requesterId}`,
            '',
            { headers, withCredentials: true }
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
            >(`${this.baseUrl}/api/CodeSnippets?UserName=${encodeURIComponent(userId)}`, { headers: this.buildAuthHeaders(), withCredentials: true })
            .pipe(map((response) => response.items || []))
    }

    private getUserPages(userId: string): Observable<PageDto[]> {
        console.log('🔍 ProfileService: Getting pages for user:', userId)

        // Use the PageService to get all pages with pagination
        return this.pageService
            .getPages({
                sortBy: 'latest',
                page: 1,
                pageSize: 100, // Get more results to ensure we capture user's pages
            })
            .pipe(
                map((result) => {
                    const allPages = result.items || []
                    console.log(
                        '🔍 ProfileService: Got all pages, total:',
                        allPages.length
                    )

                    // Filter pages by the specific user (by username or ID)
                    const userPages = allPages.filter((page) => {
                        const matchesUsername =
                            page.createdBy?.userName === userId
                        const matchesId = page.createdById === userId
                        return matchesUsername || matchesId
                    })

                    console.log(
                        '✅ ProfileService: Filtered pages for user:',
                        userId,
                        'found:',
                        userPages.length
                    )
                    console.log('📄 ProfileService: User pages:', userPages)

                    return userPages
                }),
                catchError((error) => {
                    console.error(
                        '❌ ProfileService: Error getting pages:',
                        error
                    )
                    // Return empty array instead of failing
                    return of([])
                })
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

    /**
     * Get all available usernames from the API
     */
    getAllUserNames(): Observable<string[]> {
        const headers = new HttpHeaders({
            accept: '*/*',
            Authorization: `Bearer ${this.authService.getToken()}`,
            'ngrok-skip-browser-warning': 'true',
        })

        return this.http.get<string[]>(
            `${this.baseUrl}/api/Auth/GetAllUserNames`,
            { headers }
        )
    }

    /**
     * Search users by filtering usernames locally and fetching full user details
     */
    searchUsers(query?: string): Observable<ApplicationUserDto[]> {
        if (!query || query.trim().length < 1) {
            return of([])
        }

        const searchQuery = query.toLowerCase().trim()

        return this.getAllUserNames().pipe(
            map(
                (usernames) =>
                    usernames
                        .filter((username) =>
                            username.toLowerCase().includes(searchQuery)
                        )
                        .slice(0, 10) // Limit to 10 results for performance
            ),
            switchMap((filteredUsernames) => {
                if (filteredUsernames.length === 0) {
                    return of([])
                }

                // Fetch full user details for each filtered username
                const userDetailRequests = filteredUsernames.map((username) =>
                    this.getPublicUserInfo(username).pipe(
                        catchError(() => {
                            // If fetching user details fails, create a basic user object
                            const basicUser: ApplicationUserDto = {
                                id: undefined,
                                userName: username,
                                firstName: undefined,
                                lastName: undefined,
                                email: undefined,
                                dateOfBirth: undefined,
                                gender: undefined,
                                birthPlace: undefined,
                                address: undefined,
                                roles: [],
                                fullName: username,
                            }
                            return of(basicUser)
                        })
                    )
                )

                return forkJoin(userDetailRequests)
            }),
            catchError(() => {
                console.error('Error searching users')
                return of([])
            })
        )
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
