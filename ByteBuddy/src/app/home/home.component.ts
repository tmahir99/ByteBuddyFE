import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    userRole: string = this.authService.getUserRoles()?.toString() || ''
    response: string = ''
    userFullName: string = this.authService.getUserUsername()?.toString() || ''

    codeSnippets = [
        {
            id: 4,
            title: 'My First ADMIN Code Snippet',
            codeContent:
                "```ts \n let message = 'Hello World'; \n conslo.log(message); \n ```",
            description: 'Test of my first code Snippet',
            programmingLanguage: 'C#',
            fileUrl: 'string',
            createdAt: '2025-01-19T21:59:08.3319444',
            createdBy: {
                userName: 'admin',
                firstName: 'Mahir',
                lastName: 'Tahirovic',
                email: 'mahirtahirovic99@gmail.com',
                password: null,
                dateOfBirth: '0001-01-01T00:00:00',
                gender: null,
                birthPlace: null,
                address: null,
                roles: null,
            },
            tags: [
                {
                    id: 2,
                    name: 'C++',
                    area: 'Backend',
                    codeSnippets: null,
                },
                {
                    id: 7,
                    name: 'AWS',
                    area: 'DevOps',
                    codeSnippets: null,
                },
            ],
            likesCount: 0,
            commentsCount: 0,
            createdById: '9a41c00b-d981-4252-bfd5-6ae6061a7079',
        },
        {
            id: 3,
            title: 'My Third Code Snippet',
            codeContent:
                "```js \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n \n let message = 'Hello World 2'; \n conslo.log(message); \n```",
            description: 'Test of my longest code Snippet',
            programmingLanguage: 'JavaScript',
            fileUrl: 'string',
            createdAt: '2025-01-19T21:03:13.3917807',
            createdBy: {
                userName: 'tmahir99',
                firstName: 'Mahir',
                lastName: 'Tahirovic',
                email: 'mahirtahirovic@hotmail.com',
                password: null,
                dateOfBirth: '0001-01-01T00:00:00',
                gender: null,
                birthPlace: null,
                address: null,
                roles: null,
            },
            tags: [
                {
                    id: 2,
                    name: 'C++',
                    area: 'Backend',
                    codeSnippets: null,
                },
                {
                    id: 4,
                    name: 'JavaScript',
                    area: 'Frontend',
                    codeSnippets: null,
                },
                {
                    id: 5,
                    name: 'TypeScript',
                    area: 'Frontend',
                    codeSnippets: null,
                },
            ],
            likesCount: 0,
            commentsCount: 0,
            createdById: 'f6eebf4a-c19a-4c22-aa73-538fa588c2d1',
        },
        {
            id: 2,
            title: 'My Second Code Snippet',
            codeContent:
                "```js \n let message = 'Hello World 2'; \n conslo.log(message); \n ```",
            description: 'Test of my first code Snippet',
            programmingLanguage: 'JavaScript',
            fileUrl: 'string',
            createdAt: '2025-01-19T21:02:10.4601464',
            createdBy: {
                userName: 'tmahir99',
                firstName: 'Mahir',
                lastName: 'Tahirovic',
                email: 'mahirtahirovic@hotmail.com',
                password: null,
                dateOfBirth: '0001-01-01T00:00:00',
                gender: null,
                birthPlace: null,
                address: null,
                roles: null,
            },
            tags: [
                {
                    id: 5,
                    name: 'TypeScript',
                    area: 'Frontend',
                    codeSnippets: null,
                },
            ],
            likesCount: 0,
            commentsCount: 0,
            createdById: 'f6eebf4a-c19a-4c22-aa73-538fa588c2d1',
        },
        {
            id: 1,
            title: 'My First Code Snippet + Updated',
            codeContent:
                "```ts \n let message = 'Hello World'; \n conslo.log(message); \n ```",
            description:
                'Test of my first code Snippet, Removed Tag with id:4, and added id:2',
            programmingLanguage: 'C#',
            fileUrl: 'string',
            createdAt: '2025-01-19T20:53:31.0772458',
            createdBy: {
                userName: 'tmahir99',
                firstName: 'Mahir',
                lastName: 'Tahirovic',
                email: 'mahirtahirovic@hotmail.com',
                password: null,
                dateOfBirth: '0001-01-01T00:00:00',
                gender: null,
                birthPlace: null,
                address: null,
                roles: null,
            },
            tags: [
                {
                    id: 1,
                    name: 'C#',
                    area: 'Backend',
                    codeSnippets: null,
                },
                {
                    id: 2,
                    name: 'C++',
                    area: 'Backend',
                    codeSnippets: null,
                },
            ],
            likesCount: 0,
            commentsCount: 0,
            createdById: 'f6eebf4a-c19a-4c22-aa73-538fa588c2d1',
        },
    ]

    constructor(
        private authService: AuthService,
        private http: HttpClient,
        private router: Router
    ) {}
}
