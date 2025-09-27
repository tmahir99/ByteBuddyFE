import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'
import { PagedResponse, CodeSnippet, Tag } from '../code-snippet'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    userRole: string = this.authService.getUserRoles()?.toString() || ''
    userFullName: string = this.authService.getUserUsername()?.toString() || ''
    codeSnippets: CodeSnippet[] = []
    error: string = ''
    tags: Tag[] = []
    searchTerm: string = ''
    createdById: string = ''
    selectedTag: string | null = null
    sortBy: string = 'title'
    searchType: 'language' | 'area' = 'language' // Default to 'language'
    isSearchSectionVisible: boolean = false // Toggle visibility of search section

    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadSnippets()
        this.loadTags()
    }

    toggleSearchSection() {
        this.isSearchSectionVisible = !this.isSearchSectionVisible
    }

    loadSnippets() {
        this.http
            .get<
                PagedResponse<CodeSnippet>
            >(' https://7137430cb0f4.ngrok-free.app/api/CodeSnippets')
            .subscribe({
                next: (response) => {
                    this.codeSnippets = response.items
                },
                error: (err) => {
                    this.error =
                        'Failed to load code snippets. Please try again.'
                    console.error('Error loading code snippets:', err)
                },
            })
    }

    loadTags() {
        this.http
            .get<Tag[]>(' https://7137430cb0f4.ngrok-free.app/api/Tags')
            .subscribe({
                next: (response) => {
                    this.tags = response
                },
                error: (err) => {
                    console.error('Error loading tags:', err)
                },
            })
    }

    get distinctLanguages(): Tag[] {
        const seen = new Set<string>()
        return this.tags.filter((tag) => {
            if (seen.has(tag.name)) {
                return false
            }
            seen.add(tag.name)
            return true
        })
    }

    get distinctAreas(): Tag[] {
        const seen = new Set<string>()
        return this.tags.filter((tag) => {
            if (seen.has(tag.area)) {
                return false
            }
            seen.add(tag.area)
            return true
        })
    }

    searchSnippets() {
        // Check if at least one search criteria is provided
        if (!this.selectedTag && !this.createdById.trim()) {
            this.error = 'Please select a tag or enter a username.'
            return
        }

        // Encode all query parameters
        const encodedSearchTerm = encodeURIComponent(this.searchTerm)
        const encodedCreatedBy = encodeURIComponent(this.createdById)
        const encodedSortBy = encodeURIComponent(this.sortBy)

        let url: string
        let queryParams: string[] = []

        // Add common query parameters
        if (this.searchTerm.trim()) {
            queryParams.push(`SearchTerm=${encodedSearchTerm}`)
        }
        if (this.createdById.trim()) {
            queryParams.push(`UserName=${encodedCreatedBy}`)
        }
        queryParams.push(`SortBy=${encodedSortBy}`)
        queryParams.push('Page=1')
        queryParams.push('PageSize=10')

        if (this.selectedTag) {
            // Use the specific tag-based endpoint
            const encodedSelectedTag = encodeURIComponent(this.selectedTag)
            const tagParam =
                this.searchType === 'language'
                    ? 'ProgrammingLanguage'
                    : 'ProgrammingArea'
            queryParams.push(`${tagParam}=${encodedSelectedTag}`)

            url = ` https://7137430cb0f4.ngrok-free.app/api/CodeSnippets/bytag/${encodedSelectedTag}?${queryParams.join('&')}`
        } else {
            // Use the general search endpoint
            url = ` https://7137430cb0f4.ngrok-free.app/api/CodeSnippets?${queryParams.join('&')}`
        }

        this.http.get<PagedResponse<CodeSnippet>>(url).subscribe({
            next: (response) => {
                this.codeSnippets = response.items || []
                this.error = '' // Clear any previous errors
            },
            error: (err) => {
                this.error = 'Failed to search code snippets. Please try again.'
                console.error('Error searching code snippets:', err)
            },
        })
    }

    cancelSearch() {
        // Reset all search parameters
        this.searchTerm = ''
        this.createdById = ''
        this.selectedTag = null
        this.sortBy = 'title'
        this.searchType = 'language'

        // Reload all snippets
        this.loadSnippets()
    }

    onSnippetCreated() {
        this.loadSnippets()
    }

    getFormattedDate(dateString: string | Date): Date {
        return dateString instanceof Date ? dateString : new Date(dateString)
    }

    onSnippetDeleted(snippetId: any) {
        this.codeSnippets = this.codeSnippets.filter(
            (snippet) => snippet.id !== snippetId
        )
        this.loadSnippets()
    }

    onSnippetchanged() {
        this.loadSnippets()
    }

    trackBySnippetId(index: number, snippet: CodeSnippet): any {
        return snippet.id
    }
}
