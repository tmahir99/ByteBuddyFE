import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PagedResponse, CodeSnippet } from '../code-snippet';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    userRole: string = this.authService.getUserRoles()?.toString() || '';
    userFullName: string = this.authService.getUserUsername()?.toString() || '';
    codeSnippets: CodeSnippet[] = [];
    error: string = '';
    tags: any[] = [];
    searchTerm: string = '';
    createdById: string = '';
    selectedTag: string | null = null;
    sortBy: string = 'title';
    searchType: 'language' | 'area' = 'language'; // Default to 'language'
    isSearchSectionVisible: boolean = false; // Toggle visibility of search section

    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit() {
        this.loadSnippets();
        this.loadTags();
    }

    toggleSearchSection() {
        this.isSearchSectionVisible = !this.isSearchSectionVisible;
    }

    loadSnippets() {
        this.http
            .get<PagedResponse<CodeSnippet>>('https://localhost:7082/api/CodeSnippets')
            .subscribe({
                next: (response) => {
                    this.codeSnippets = response.items;
                },
                error: (err) => {
                    this.error = 'Failed to load code snippets. Please try again.';
                    console.error('Error loading code snippets:', err);
                },
            });
    }

    loadTags() {
        this.http.get<any[]>('https://localhost:7082/api/Tags').subscribe({
            next: (response) => {
                this.tags = response;
            },
            error: (err) => {
                console.error('Error loading tags:', err);
            },
        });
    }

    searchSnippets() {
        if (!this.selectedTag) {
            this.error = 'Please select a tag.';
            return;
        }
    
        // Encode all query parameters
        const encodedSearchTerm = encodeURIComponent(this.searchTerm);
        const encodedCreatedById = encodeURIComponent(this.createdById);
        const encodedSelectedTag = encodeURIComponent(this.selectedTag);
        const encodedSortBy = encodeURIComponent(this.sortBy);
    
        // Construct the URL based on the selected search type
        const tagParam = this.searchType === 'language' ? 'ProgrammingLanguage' : 'ProgrammingArea';
        const url = `https://localhost:7082/api/CodeSnippets/bytag/${encodedSelectedTag}?SearchTerm=${encodedSearchTerm}&${tagParam}=${encodedSelectedTag}&CreatedById=${encodedCreatedById}&SortBy=${encodedSortBy}&Page=1&PageSize=10`;
    
        this.http.get<PagedResponse<CodeSnippet>>(url).subscribe({
            next: (response) => {
                this.codeSnippets = response.items;
            },
            error: (err) => {
                this.error = 'Failed to search code snippets. Please try again.';
                console.error('Error searching code snippets:', err);
            },
        });
    }

    cancelSearch() {
        // Reset all search parameters
        this.searchTerm = '';
        this.createdById = '';
        this.selectedTag = null;
        this.sortBy = 'title';
        this.searchType = 'language';

        // Reload all snippets
        this.loadSnippets();
    }

    onSnippetCreated() {
        this.loadSnippets();
    }

    getFormattedDate(dateString: string | Date): Date {
        return dateString instanceof Date ? dateString : new Date(dateString);
    }

    onSnippetDeleted(snippetId: any) {
        this.codeSnippets = this.codeSnippets.filter((snippet) => snippet.id !== snippetId);
        this.loadSnippets();
    }

    onSnippetchanged() {
        this.loadSnippets();
    }
}