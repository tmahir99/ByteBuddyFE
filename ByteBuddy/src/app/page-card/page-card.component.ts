import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { PageDto } from '../page.types'
import { PageService } from '../page.service'
import { NotificationService } from '../notification.service'

@Component({
    selector: 'app-page-card',
    templateUrl: './page-card.component.html',
    styleUrls: ['./page-card.component.css'],
})
export class PageCardComponent {
    @Input() page!: PageDto
    @Input() showActions: boolean = true
    @Input() showAuthor: boolean = true
    @Output() pageDeleted = new EventEmitter<number>()
    @Output() pageLiked = new EventEmitter<PageDto>()
    @Output() pageUpdated = new EventEmitter<PageDto>()

    isLiking = false
    showLikers = false
    likers: any[] = []

    constructor(
        private pageService: PageService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    onLikePage() {
        if (this.isLiking || !this.pageService.isAuthenticated()) return

        this.isLiking = true
        this.pageService.likePage(this.page.id).subscribe({
            next: (updatedPage) => {
                this.page = { ...this.page, ...updatedPage }
                this.pageLiked.emit(this.page)

                const action = this.page.isLikedByCurrentUser
                    ? 'liked'
                    : 'unliked'
                this.notificationService.showSuccess(
                    `Page ${action} successfully`
                )
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

    onDeletePage() {
        if (!this.canEditPage()) return

        if (
            confirm(
                'Are you sure you want to delete this page? This action cannot be undone.'
            )
        ) {
            this.pageService.deletePage(this.page.id).subscribe({
                next: () => {
                    this.pageDeleted.emit(this.page.id)
                    this.notificationService.showSuccess(
                        'Page deleted successfully'
                    )
                },
                error: (error) => {
                    console.error('Error deleting page:', error)
                    this.notificationService.showError('Failed to delete page')
                },
            })
        }
    }

    onEditPage() {
        if (!this.canEditPage()) return
        this.router.navigate(['/pages/edit', this.page.id])
    }

    onViewPage() {
        this.router.navigate(['/pages', this.page.id])
    }

    onViewAuthor() {
        if (this.page.createdBy?.userName) {
            this.router.navigate(['/profile', this.page.createdBy.userName])
        }
    }

    toggleLikers() {
        if (!this.showLikers) {
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
        } else {
            this.showLikers = false
        }
    }

    canEditPage(): boolean {
        const currentUserId = this.pageService.getCurrentUserId()
        return currentUserId === this.page.createdById
    }

    isAuthenticated(): boolean {
        return this.pageService.isAuthenticated()
    }

    getAuthorDisplayName(): string {
        if (this.page.createdBy?.firstName && this.page.createdBy?.lastName) {
            return `${this.page.createdBy.firstName} ${this.page.createdBy.lastName}`
        }
        return this.page.createdBy?.userName || 'Unknown User'
    }

    getFormattedDate(date: Date | string): string {
        const dateObj = typeof date === 'string' ? new Date(date) : date
        return dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    getRelativeTime(date: Date | string): string {
        const dateObj = typeof date === 'string' ? new Date(date) : date
        const now = new Date()
        const diffInHours =
            Math.abs(now.getTime() - dateObj.getTime()) / (1000 * 60 * 60)

        if (diffInHours < 24) {
            return Math.floor(diffInHours) + 'h ago'
        } else if (diffInHours < 24 * 7) {
            return Math.floor(diffInHours / 24) + 'd ago'
        } else if (diffInHours < 24 * 30) {
            return Math.floor(diffInHours / (24 * 7)) + 'w ago'
        } else {
            return Math.floor(diffInHours / (24 * 30)) + 'mo ago'
        }
    }

    onImageError(event: Event) {
        const img = event.target as HTMLImageElement
        img.style.display = 'none' // Hide broken image
        console.warn('Failed to load page image:', img.src)
    }

    // Get the image URL for the current page
    getPageImageUrl(): string | null {
        if (!this.page) return null
        
        // Use fileId if available (new approach)
        if (this.page.fileId) {
            return this.pageService.getPageImageUrl(this.page.fileId)
        }
        
        // Fallback to imageUrl if available (legacy support)
        if (this.page.imageUrl) {
            return this.page.imageUrl
        }
        
        return null
    }

    // Check if page has an image to display
    hasPageImage(): boolean {
        return !!(this.page?.fileId || this.page?.imageUrl)
    }
}
