import { Component, Input, EventEmitter, Output } from '@angular/core'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-tomorrow.css'
import { NotificationService } from '../notification.service'
import { AuthService } from '../auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { PermissionService } from '../permission.service'

interface CodeSnippetPayload {
  title: string;
  codeContent: string;
  description: string;
  programmingLanguage: string;
  fileUrl: string;
  createdById: string;
  tagIds: number[];
}

@Component({
    selector: 'app-code-snippet',
    templateUrl: './code-snippet.component.html',
    styleUrls: ['./code-snippet.component.css'],
})
export class CodeSnippetComponent {
    @Input() id: string = ''
    @Input() title: string = 'Code Snippet'
    @Input() description?: string
    @Input() codeContent: string = ''
    @Input() language: string = 'javascript'
    @Input() tags: { name: string }[] = []
    @Input() likesCount: number = 0
    @Input() commentsCount: number = 0
    @Input() createdAt?: Date
    @Input() createdBy?: string
    @Input() fileUrl?: string
    @Input() likedByUsers?: string[]
    @Input() createdById?: string
    @Output() snippetDeleted = new EventEmitter<string>();

    // Editable fields
    editableTitle: string = '';
    editableDescription: string = '';
    editableCodeContent: string = '';
    editableLanguage: string = '';
    editableFileUrl: string = '';

    isEditing = false;
    copied: boolean = false;
    showComments = false;
    error = '';


    get highlightedCode(): string {
        // Remove first line (language specification)
        const cleanCode = this.codeContent
            .split('\n')
            .slice(1)
            .join('\n')
            .trim()
        return highlight(cleanCode, languages[this.language], this.language)
    }

    constructor(
        private notificationService: NotificationService,
        private http: HttpClient,
        public authService: AuthService,
        private prermisionService: PermissionService
        
    ) {}

    copyToClipboard(): void {
        const cleanCode = this.codeContent
            .split('\n')
            .slice(1)
            .join('\n')
            .trim()
        navigator.clipboard.writeText(cleanCode).then(() => {
            this.copied = true
            this.notificationService.showSuccess('Code copied to clipboard!')

            setTimeout(() => (this.copied = false), 2000)
        })
    }

    toggleComments() {
        this.showComments = !this.showComments
    }

    likeCodeSnippet(snippetID: string) {
        const token = this.authService.getToken()

        console.log(token)
        if (token) {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            })
            this.http
                .post(
                    `https://localhost:7082/api/SocialInteractions/snippets/${snippetID}/like`,
                    null,
                    { headers, withCredentials: true }
                )
                .subscribe({
                    next: (response) => {
                        console.log(response)
                    },
                    error: (err) => {
                        this.error =
                            'Failed to load comments. Please try again.'
                        console.error('Error loading comments:', err)
                    },
                })
        } else {
            console.error('Token not found.')
        }
    }

    isLikedByCurrentUser(): boolean {
      return this.likedByUsers ? this.likedByUsers.some(user => user === this.authService.getUserUsername()) : false;
    }
  
    getLikeButtonStyles(): { [key: string]: string } {
        return this.isLikedByCurrentUser() 
            ? { 'cursor': 'not-allowed', 'filter': 'grayscale(100%)' }
            : { 'cursor': 'pointer', 'filter': 'none' };
    }

     canModifySnippet(): boolean {
        const currentUser = this.authService.getUserUsername();
        const isAdmin = this.prermisionService.isAdmin();
        return isAdmin || (this.createdBy === currentUser);
    }

    startEditing(): void {
        this.editableTitle = this.title;
        this.editableDescription = this.description || '';
        this.editableCodeContent = this.codeContent;
        this.editableLanguage = this.language;
        this.editableFileUrl = this.fileUrl || '';
        this.isEditing = true;
    }

    cancelEditing(): void {
        this.isEditing = false;
    }

    saveChanges(): void {
        const token = this.authService.getToken();
        if (!token) {
            this.notificationService.showError('You must be logged in to edit snippets');
            return;
        }

        const payload: CodeSnippetPayload = {
            title: this.editableTitle,
            codeContent: this.editableCodeContent,
            description: this.editableDescription,
            programmingLanguage: this.editableLanguage,
            fileUrl: this.editableFileUrl,
            createdById: this.createdById || '',
            tagIds: this.tags.map(tag => parseInt(tag.name)) // Adjust based on your tag structure
        };

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });

        this.http.put(`https://localhost:7082/api/CodeSnippets/${this.id}`, payload, { headers })
            .subscribe({
                next: (response) => {
                    this.notificationService.showSuccess('Snippet updated successfully');
                    // Update local state
                    this.title = this.editableTitle;
                    this.codeContent = this.editableCodeContent;
                    this.description = this.editableDescription;
                    this.language = this.editableLanguage;
                    this.fileUrl = this.editableFileUrl;
                    this.isEditing = false;
                },
                error: (error) => {
                    this.notificationService.showError('Failed to update snippet');
                    console.error('Error updating snippet:', error);
                }
            });
    }

    deleteSnippet(): void {
        if (!confirm('Are you sure you want to delete this snippet?')) {
            return;
        }

        const token = this.authService.getToken();
        if (!token) {
            this.notificationService.showError('You must be logged in to delete snippets');
            return;
        }

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });

        this.http.delete(`https://localhost:7082/api/CodeSnippets/${this.id}`, { headers })
            .subscribe({
                next: () => {
                    this.notificationService.showSuccess('Snippet deleted successfully');
                    this.snippetDeleted.emit(this.id);
                },
                error: (error) => {
                    this.notificationService.showError('Failed to delete snippet');
                    console.error('Error deleting snippet:', error);
                }
            });
    }
}
