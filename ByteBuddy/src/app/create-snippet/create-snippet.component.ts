import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from '../auth.service'
import { Tag } from '../code-snippet'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-tomorrow.css'

@Component({
    selector: 'app-create-snippet',
    templateUrl: './create-snippet.component.html',
    styleUrls: ['./create-snippet.component.css'],
})
export class CreateSnippetComponent implements OnInit {
    snippetForm: FormGroup
    tags: Tag[] = []
    submitted = false
    success = false
    error = ''
    selectedTags: number[] = []
    isModalOpen = false
    previewMode = false
    selectedLanguage = 'javascript'
    isLoading = false

    @Output() snippetCreated = new EventEmitter<void>()

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private authService: AuthService
    ) {
        this.snippetForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            codeContent: ['', Validators.required],
            fileUrl: [''],
            createdById: this.authService.getUserUsername(),
        })
    }

    ngOnInit() {
        this.loadTags()
    }

    get f() {
        return this.snippetForm.controls
    }

    get highlightedCode(): string {
        const code = this.snippetForm.get('codeContent')?.value || ''
        const language = this.selectedLanguage
        return highlight(code, languages[language], language)
    }

    openModal() {
        this.isModalOpen = true
    }

    closeModal() {
        this.isModalOpen = false
        this.resetForm()
    }

    togglePreview() {
        this.previewMode = !this.previewMode
    }

    loadTags() {
        this.http
            .get<Tag[]>(' https://7137430cb0f4.ngrok-free.app/api/Tags')
            .subscribe({
                next: (tags) => {
                    this.tags = tags
                },
                error: (error) => {
                    this.error = 'Failed to load tags. Please try again.'
                    console.error('Error loading tags:', error)
                },
            })
    }

    onTagChange(event: Event, tag: Tag) {
        const checkbox = event.target as HTMLInputElement
        if (checkbox.checked) {
            this.selectedTags.push(tag.id)
            // Update selected language based on the first selected tag
            if (this.selectedTags.length === 1) {
                this.selectedLanguage = tag.name.toLowerCase()
            }
        } else {
            this.selectedTags = this.selectedTags.filter((id) => id !== tag.id)
            // Update language if the unselected tag was the current language
            if (
                tag.name.toLowerCase() === this.selectedLanguage &&
                this.selectedTags.length > 0
            ) {
                const newTag = this.tags.find(
                    (t) => t.id === this.selectedTags[0]
                )
                if (newTag) {
                    this.selectedLanguage = newTag.name.toLowerCase()
                }
            }
        }
    }

    onSubmit() {
        this.submitted = true
        this.success = false
        this.error = ''

        if (this.snippetForm.invalid || this.selectedTags.length === 0) {
            if (this.selectedTags.length === 0) {
                this.error = 'Please select at least one tag'
            }
            return
        }

        const token = this.authService.getToken()
        if (!token) {
            this.error = 'You must be logged in to create snippets'
            return
        }

        const payload = {
            ...this.snippetForm.value,
            tagIds: this.selectedTags,
            programmingLanguage: this.getProgrammingLanguage(),
        }

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
            Authorization: `Bearer ${token}`,
        })

        this.isLoading = true

        this.http
            .post(
                ' https://7137430cb0f4.ngrok-free.app/api/CodeSnippets',
                payload,
                { headers, withCredentials: true }
            )
            .subscribe({
                next: () => {
                    this.isLoading = false
                    this.success = true
                    this.snippetCreated.emit()
                    setTimeout(() => {
                        this.closeModal()
                    }, 2000)
                },
                error: (error) => {
                    this.isLoading = false
                    this.error =
                        'Failed to create code snippet. Please try again.'
                    console.error('Error creating snippet:', error)
                },
            })
    }

    getProgrammingLanguage(): string {
        const selectedTag = this.tags.find((tag) =>
            this.selectedTags.includes(tag.id)
        )
        return selectedTag ? selectedTag.name : ''
    }

    resetForm() {
        this.submitted = false
        this.success = false
        this.error = ''
        this.snippetForm.reset({
            createdById: this.authService.getUserUsername(),
        })
        this.selectedTags = []
        this.previewMode = false
    }
}
