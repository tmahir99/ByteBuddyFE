import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject, switchMap, takeUntil } from 'rxjs'
import { CodeSnippet } from '../code-snippet'
import { NotificationService } from '../notification.service'
import {
    ApplicationUserDto,
    FriendshipDto,
    FriendshipStatus,
    PageDto,
} from './profile.types'
import { ProfileService } from './profile.service'
import { AuthService } from '../auth.service'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
    user?: ApplicationUserDto
    snippets: CodeSnippet[] = []
    pages: PageDto[] = []
    isLoading = false
    error = ''
    isCurrentUser = false
    friendshipStatus: FriendshipStatus = 'none'
    incomingRequests: FriendshipDto[] = []
    private destroy$ = new Subject<void>()

    constructor(
        private route: ActivatedRoute,
        private profileService: ProfileService,
        private authService: AuthService,
        private notification: NotificationService
    ) {}

    ngOnInit(): void {
        this.loadProfile()
    }

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }

    onSendFriendRequest(): void {
        // Use userName if id is not available (common with public API)
        const userIdentifier = this.user?.id || this.user?.userName
        if (!userIdentifier) {
            this.notification.showError('Unable to identify user')
            return
        }

        this.profileService
            .sendFriendRequest(userIdentifier)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.notification.showSuccess('Friend request sent')
                    this.friendshipStatus = 'outgoing'
                },
                error: (error) => {
                    console.error('Friend request error:', error)
                    this.notification.showError('Unable to send friend request')
                },
            })
    }

    onAcceptFriendRequest(request?: FriendshipDto): void {
        const requesterId =
            request?.requesterId || this.user?.id || this.user?.userName

        if (!requesterId) {
            this.notification.showError('Unable to identify user')
            return
        }

        this.profileService
            .acceptFriendRequest(requesterId)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.notification.showSuccess('Friend request accepted')
                    // Update friendship status for current profile view
                    this.friendshipStatus = 'friends'

                    // Update incoming requests list if viewing current user's profile
                    if (request) {
                        this.incomingRequests = this.incomingRequests.filter(
                            (r) => r.requesterId !== request.requesterId
                        )
                    }
                },
                error: (error) => {
                    console.error('Accept friend request error:', error)
                    this.notification.showError(
                        'Unable to accept friend request'
                    )
                },
            })
    }

    onDeclineFriendRequest(request?: FriendshipDto): void {
        const requesterId =
            request?.requesterId || this.user?.id || this.user?.userName

        if (!requesterId) {
            this.notification.showError('Unable to identify user')
            return
        }

        this.profileService
            .declineFriendRequest(requesterId)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: () => {
                    this.notification.showInfo('Friend request declined')
                    // Update friendship status for current profile view
                    this.friendshipStatus = 'none'

                    // Update incoming requests list if viewing current user's profile
                    if (request) {
                        this.incomingRequests = this.incomingRequests.filter(
                            (r) => r.requesterId !== request.requesterId
                        )
                    }
                },
                error: (error) => {
                    console.error('Decline friend request error:', error)
                    this.notification.showError(
                        'Unable to decline friend request'
                    )
                },
            })
    }

    private loadProfile(): void {
        this.isLoading = true
        this.route.paramMap
            .pipe(
                takeUntil(this.destroy$),
                switchMap((params) => {
                    const identifier = params.get('id')
                    if (identifier) {
                        this.isCurrentUser =
                            identifier === this.authService.getUserUsername() ||
                            identifier === this.authService.getUserId()

                        // If viewing current user's profile, use getCurrentUserProfile
                        if (this.isCurrentUser) {
                            return this.profileService.getCurrentUserProfile()
                        }

                        return this.profileService.getPublicProfile(identifier)
                    }
                    this.isCurrentUser = true
                    return this.profileService.getCurrentUserProfile()
                })
            )
            .subscribe({
                next: (result) => {
                    this.user = result.user
                    this.snippets = result.snippets
                    this.pages = result.pages
                    this.friendshipStatus = result.friendshipStatus
                    if (result.friendshipRequests) {
                        this.incomingRequests = result.friendshipRequests
                    }
                    this.isLoading = false
                },
                error: (err) => {
                    console.error(err)
                    this.error = 'Unable to load profile'
                    this.isLoading = false
                },
            })
    }

    getDisplayName(user: ApplicationUserDto): string {
        if (user.fullName) {
            return user.fullName
        }
        const names = [user.firstName, user.lastName].filter((name) => name)
        return names.join(' ') || user.userName || 'User'
    }

    getFormattedDate(dateString: string): Date {
        return new Date(dateString)
    }

    getUserDisplayName(user: ApplicationUserDto): string {
        if (user.fullName) {
            return user.fullName
        }
        const names = [user.firstName, user.lastName].filter((name) => name)
        return names.join(' ') || user.userName || 'User'
    }

    // Page event handlers
    onPageDeleted(pageId: number): void {
        this.pages = this.pages.filter((p) => p.id !== pageId)
        this.notification.showSuccess('Page deleted successfully')
    }

    onPageLiked(updatedPage: PageDto): void {
        const index = this.pages.findIndex((p) => p.id === updatedPage.id)
        if (index !== -1) {
            this.pages[index] = updatedPage
        }
    }

    onPageUpdated(updatedPage: PageDto): void {
        const index = this.pages.findIndex((p) => p.id === updatedPage.id)
        if (index !== -1) {
            this.pages[index] = updatedPage
        }
    }

    // Code snippet event handler
    onSnippetCreated(): void {
        // Reload the profile to get the updated snippets list
        this.loadProfile()
        this.notification.showSuccess('Code snippet created successfully!')
    }
}
