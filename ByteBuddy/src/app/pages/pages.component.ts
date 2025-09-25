import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PageDto, PageSearchRequest } from '../page.types'
import { PageService } from '../page.service'
import { NotificationService } from '../notification.service'

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
    pages: PageDto[] = []
    isLoading = false
    error: string | null = null

    // Search and filtering
    isSearchSectionVisible = false
    searchTerm = ''
    createdById = ''
    sortBy = 'latest'
    currentPage = 1
    pageSize = 10
    totalPages = 0
    totalCount = 0

    constructor(
        private pageService: PageService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadPages()
    }

    loadPages(reset = false) {
        if (reset) {
            this.currentPage = 1
        }

        this.isLoading = true
        this.error = null

        const searchRequest: PageSearchRequest = {
            searchTerm: this.searchTerm || undefined,
            createdById: this.createdById || undefined,
            sortBy: this.sortBy,
            page: this.currentPage,
            pageSize: this.pageSize,
        }

        this.pageService.getPages(searchRequest).subscribe({
            next: (result) => {
                this.pages = result.items || []
                this.totalPages = result.totalPages
                this.totalCount = result.totalCount
                this.isLoading = false
            },
            error: (error) => {
                console.error('Error loading pages:', error)
                this.error = 'Failed to load pages. Please try again.'
                this.isLoading = false
                this.notificationService.showError('Failed to load pages')
            },
        })
    }

    toggleSearchSection() {
        this.isSearchSectionVisible = !this.isSearchSectionVisible
    }

    searchPages() {
        this.loadPages(true)
    }

    clearSearch() {
        this.searchTerm = ''
        this.createdById = ''
        this.sortBy = 'latest'
        this.loadPages(true)
    }

    onPageDeleted(pageId: number) {
        this.pages = this.pages.filter((p) => p.id !== pageId)
        this.totalCount--

        // If current page is empty and not the first page, go to previous page
        if (this.pages.length === 0 && this.currentPage > 1) {
            this.currentPage--
            this.loadPages()
        }
    }

    onPageLiked(updatedPage: PageDto) {
        const index = this.pages.findIndex((p) => p.id === updatedPage.id)
        if (index !== -1) {
            this.pages[index] = updatedPage
        }
    }

    onPageUpdated(updatedPage: PageDto) {
        const index = this.pages.findIndex((p) => p.id === updatedPage.id)
        if (index !== -1) {
            this.pages[index] = updatedPage
        }
    }

    onCreatePage() {
        this.router.navigate(['/pages/create'])
    }

    // Pagination methods
    goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page
            this.loadPages()
        }
    }

    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--
            this.loadPages()
        }
    }

    goToNextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++
            this.loadPages()
        }
    }

    getPageNumbers(): number[] {
        const pages: number[] = []
        const maxPagesToShow = 5
        const halfPages = Math.floor(maxPagesToShow / 2)

        let startPage = Math.max(1, this.currentPage - halfPages)
        let endPage = Math.min(this.totalPages, startPage + maxPagesToShow - 1)

        // Adjust startPage if we're near the end
        startPage = Math.max(1, endPage - maxPagesToShow + 1)

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        return pages
    }

    trackByPageId(index: number, page: PageDto): number {
        return page.id
    }

    isAuthenticated(): boolean {
        return this.pageService.isAuthenticated()
    }

    getCurrentUserId(): string | null {
        return this.pageService.getCurrentUserId()
    }
}
