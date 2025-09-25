import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { PageDto, ApplicationUserDto } from '../page.types'
import { PageService } from '../page.service'
import { NotificationService } from '../notification.service'

@Component({
    selector: 'app-page-detail',
    templateUrl: './page-detail.component.html',
    styleUrls: ['./page-detail.component.css'],
})
export class PageDetailComponent implements OnInit {
    page: PageDto | null = null
    likers: ApplicationUserDto[] = []
    isLoading = false
    isLiking = false
    showLikers = false
    error: string | null = null
    pageId!: number

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageService: PageService,
        private notificationService: NotificationService
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.pageId = +params['id']
                this.loadPage()
            } else {
                this.router.navigate(['/pages'])
            }
        })
    }

    loadPage() {
        this.isLoading = true
        this.error = null

        this.pageService.getPageById(this.pageId).subscribe({
            next: (page) => {
                this.page = page
                this.isLoading = false
            },
            error: (error) => {
                console.error('Error loading page:', error)
                this.error = 'Page not found or failed to load'
                this.isLoading = false

                if (error.status === 404) {
                    this.notificationService.showError('Page not found')
                } else {
                    this.notificationService.showError('Failed to load page')
                }
            },
        })
    }

    onLikePage() {
        if (
            !this.page ||
            this.isLiking ||
            !this.pageService.isAuthenticated()
        ) {
            if (!this.pageService.isAuthenticated()) {
                this.notificationService.showError(
                    'Please log in to like pages'
                )
            }
            return
        }

        this.isLiking = true
        this.pageService.likePage(this.page.id).subscribe({
            next: (updatedPage) => {
                this.page = { ...this.page!, ...updatedPage }

                const action = this.page.isLikedByCurrentUser
                    ? 'liked'
                    : 'unliked'
                this.notificationService.showSuccess(
                    `Page ${action} successfully`
                )

                // Refresh likers if they're currently shown
                if (this.showLikers) {
                    this.loadLikers()
                }
            },
            error: (error) => {
                console.error('Error liking page:', error)
                this.notificationService.showError(
                    'Failed to update like status'
                )
            },
            complete: () => {
                this.isLiking = false
            },
        })
    }

    toggleLikers() {
        if (!this.page) return

        if (!this.showLikers) {
            this.loadLikers()
        } else {
            this.showLikers = false
        }
    }

    loadLikers() {
        if (!this.page) return

        this.pageService.getPageLikers(this.page.id).subscribe({
            next: (likers) => {
                this.likers = likers
                this.showLikers = true
            },
            error: (error) => {
                console.error('Error fetching likers:', error)
                this.notificationService.showError('Failed to load likers')
            },
        })
    }

    onEditPage() {
        if (!this.page || !this.canEditPage()) return
        this.router.navigate(['/pages/edit', this.page.id])
    }

    onDeletePage() {
        if (!this.page || !this.canEditPage()) return

        if (
            confirm(
                'Are you sure you want to delete this page? This action cannot be undone.'
            )
        ) {
            this.pageService.deletePage(this.page.id).subscribe({
                next: () => {
                    this.notificationService.showSuccess(
                        'Page deleted successfully'
                    )
                    this.router.navigate(['/pages'])
                },
                error: (error) => {
                    console.error('Error deleting page:', error)
                    this.notificationService.showError('Failed to delete page')
                },
            })
        }
    }

    onViewAuthor() {
        if (this.page?.createdBy?.userName) {
            this.router.navigate(['/profile', this.page.createdBy.userName])
        }
    }

    goBackToPages() {
        this.router.navigate(['/pages'])
    }

    // Utility methods
    canEditPage(): boolean {
        const currentUserId = this.pageService.getCurrentUserId()
        return currentUserId === this.page?.createdById
    }

    isAuthenticated(): boolean {
        return this.pageService.isAuthenticated()
    }

    getAuthorDisplayName(): string {
        if (!this.page?.createdBy) return 'Unknown User'

        if (this.page.createdBy.firstName && this.page.createdBy.lastName) {
            return `${this.page.createdBy.firstName} ${this.page.createdBy.lastName}`
        }
        return this.page.createdBy.userName || 'Unknown User'
    }

    getFormattedDate(date: Date | string): string {
        const dateObj = typeof date === 'string' ? new Date(date) : date
        return dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    getRelativeTime(date: Date | string): string {
        const dateObj = typeof date === 'string' ? new Date(date) : date
        const now = new Date()
        const diffInMinutes =
            Math.abs(now.getTime() - dateObj.getTime()) / (1000 * 60)

        if (diffInMinutes < 60) {
            return Math.floor(diffInMinutes) + 'm ago'
        } else if (diffInMinutes < 1440) {
            // 24 hours
            return Math.floor(diffInMinutes / 60) + 'h ago'
        } else if (diffInMinutes < 10080) {
            // 7 days
            return Math.floor(diffInMinutes / 1440) + 'd ago'
        } else if (diffInMinutes < 43200) {
            // 30 days
            return Math.floor(diffInMinutes / 10080) + 'w ago'
        } else {
            return Math.floor(diffInMinutes / 43200) + 'mo ago'
        }
    }

    getLikerDisplayName(liker: ApplicationUserDto): string {
        if (liker.firstName && liker.lastName) {
            return `${liker.firstName} ${liker.lastName}`
        }
        return liker.userName || 'Unknown User'
    }

    onViewLikerProfile(liker: ApplicationUserDto) {
        if (liker.userName) {
            this.router.navigate(['/profile', liker.userName])
        }
    }

    onCreatePage() {
        this.router.navigate(['/pages/create'])
    }

    onImageError(event: Event) {
        const img = event.target as HTMLImageElement
        img.style.display = 'none' // Hide broken image
        console.warn('Failed to load page image:', img.src)
    }
}
