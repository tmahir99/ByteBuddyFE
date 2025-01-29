import { Component, Input, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { PagedResponse, Comment } from '../code-snippet'
import { AuthService } from '../auth.service'

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
    @Input() snippetID: string = ''

    comments: Comment[] = []
    newComment: string = ''
    error: string = ''

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.loadComments()
    }

    loadComments() {
        const token = this.authService.getToken()

        if (token) {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            })
            this.http
                .get<
                    Comment[]
                >(`https://localhost:7082/api/SocialInteractions/snippets/${this.snippetID}/comments`, { headers, withCredentials: true })
                .subscribe({
                    next: (response) => {
                        this.comments = response
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

    addComment() {
        const token = this.authService.getToken()

        if (token) {
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            })
            if (!this.newComment.trim()) return

            const newCommentObj = {
                content: this.newComment,
                createdAt: new Date().toISOString(),
                createdById: this.authService.getUserUsername(),
            }

            this.http
                .post<Comment>(
                    `https://localhost:7082/api/SocialInteractions/snippets/${this.snippetID}/comments`,
                    newCommentObj,
                    { headers, withCredentials: true }
                )
                .subscribe({
                    next: (comment) => {
                        this.comments.push(comment)
                        this.newComment = ''
                    },
                    error: (err) => {
                        this.error = 'Failed to add comment.'
                        console.error('Error adding comment:', err)
                    },
                })
        } else {
            console.error('Token not found.')
        }
    }
}
