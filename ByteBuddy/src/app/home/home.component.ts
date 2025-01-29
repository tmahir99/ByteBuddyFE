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

    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit() {
        this.http.get<PagedResponse<CodeSnippet>>('https://localhost:7082/api/CodeSnippets')
        .subscribe({
            next: (response) => {
                this.codeSnippets = response.items; // Extracting items from PagedResponse
            },
            error: (err) => {
                this.error = 'Failed to load code snippets. Please try again.';
                console.error('Error loading code snippets:', err);
            }
        });
    }

    getFormattedDate(dateString: string | Date): Date {
        return dateString instanceof Date ? dateString : new Date(dateString);
    }
}
