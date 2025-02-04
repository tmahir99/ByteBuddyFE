import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Tag } from '../code-snippet';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';

@Component({
  selector: 'app-create-snippet',
  template: `
    <button class="create-button" (click)="openModal()">
      ✨ Create New Snippet
    </button>

    <div class="modal" *ngIf="isModalOpen">
      <div class="modal-overlay" (click)="closeModal()"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Create New Code Snippet</h2>
          <button class="close-button" (click)="closeModal()">×</button>
        </div>

        <div class="modal-body">
          <form [formGroup]="snippetForm" (ngSubmit)="onSubmit()">
            <!-- Preview section -->
            <div class="code-snippet-container">
              <div class="code-snippet-header">
                <input
                  formControlName="title"
                  class="title-input"
                  placeholder="Enter title"
                  [class.is-invalid]="submitted && f['title'].errors"
                >
              </div>

              <textarea
                formControlName="description"
                class="description-input"
                placeholder="Enter description"
              ></textarea>

              <div class="code-editor-container">
                <textarea
                  formControlName="codeContent"
                  class="code-editor"
                  placeholder="Enter your code here..."
                  [class.is-invalid]="submitted && f['codeContent'].errors"
                ></textarea>
                <pre *ngIf="previewMode"><code 
                  [innerHTML]="highlightedCode" 
                  [class]="'language-' + selectedLanguage"
                ></code></pre>
              </div>

              <div class="tags-section">
                <label>Select Tags:</label>
                <div class="tags-container">
                  <div *ngFor="let tag of tags" class="tag-item">
                    <input 
                      type="checkbox"
                      [id]="'tag-' + tag.id"
                      [value]="tag.id"
                      (change)="onTagChange($event, tag)"
                    >
                    <label [for]="'tag-' + tag.id" class="tag">
                      {{tag.name}}
                    </label>
                  </div>
                </div>
                <div *ngIf="submitted && selectedTags.length === 0" class="error-message">
                  Please select at least one tag
                </div>
              </div>

              <div class="preview-toggle">
                <button type="button" (click)="togglePreview()" class="preview-button">
                  {{ previewMode ? '✏️ Edit' : '👁️ Preview' }}
                </button>
              </div>

              <div class="form-actions">
                <button type="submit" class="submit-button">Create Snippet</button>
                <button type="button" class="reset-button" (click)="resetForm()">Reset</button>
              </div>
            </div>
          </form>

          <div *ngIf="success" class="success-message">
            Code snippet created successfully!
          </div>
          
          <div *ngIf="error" class="error-message">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .create-button {
      background-color: #4CAF50;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
      position: relative;
      background-color: white;
      border-radius: 8px;
      width: 90%;
      max-width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      z-index: 1001;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid #ddd;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }

    .modal-body {
      padding: 16px;
    }

    .code-snippet-container {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      background-color: #f4f4f4;
    }

    .title-input {
      width: 100%;
      padding: 8px;
      font-size: 1.17em;
      font-weight: bold;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 12px;
    }

    .description-input {
      width: 100%;
      padding: 8px;
      min-height: 60px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 12px;
      resize: vertical;
    }

    .code-editor-container {
      position: relative;
      margin-bottom: 12px;
    }

    .code-editor {
      width: 100%;
      min-height: 200px;
      padding: 12px;
      font-family: 'Courier New', monospace;
      background-color: #282c34;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      resize: vertical;
      white-space: pre;
    }

    pre {
      margin: 0;
      padding: 12px;
      background-color: #282c34;
      border-radius: 4px;
      overflow-x: auto;
    }

    code {
      font-family: 'Courier New', monospace;
      font-size: 14px;
    }

    .tags-section {
      margin: 16px 0;
    }

    .tags-container {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }

    .tag-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .tag {
      background-color: #e0e0e0;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
    }

    .preview-toggle {
      margin: 16px 0;
      text-align: right;
    }

    .preview-button {
      background-color: #2196F3;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
    }

    .form-actions {
      display: flex;
      gap: 8px;
      margin-top: 16px;
    }

    .submit-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }

    .reset-button {
      background-color: #9e9e9e;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }

    .success-message {
      color: #4CAF50;
      margin-top: 16px;
      padding: 8px;
      border-radius: 4px;
      background-color: #E8F5E9;
    }

    .error-message {
      color: #f44336;
      margin-top: 16px;
      padding: 8px;
      border-radius: 4px;
      background-color: #FFEBEE;
    }

    .is-invalid {
      border-color: #f44336 !important;
    }
  `]
})
export class CreateSnippetComponent implements OnInit {
  snippetForm: FormGroup;
  tags: Tag[] = [];
  submitted = false;
  success = false;
  error = '';
  selectedTags: number[] = [];
  isModalOpen = false;
  previewMode = false;
  selectedLanguage = 'javascript';

  @Output() snippetCreated = new EventEmitter<void>();

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
    });
  }

  ngOnInit() {
    this.loadTags();
  }

  get f() { 
    return this.snippetForm.controls; 
  }

  get highlightedCode(): string {
    const code = this.snippetForm.get('codeContent')?.value || '';
    const language = this.selectedLanguage;
    return highlight(code, languages[language], language);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.resetForm();
  }

  togglePreview() {
    this.previewMode = !this.previewMode;
  }

  loadTags() {
    this.http.get<Tag[]>('https://localhost:7082/api/Tags')
      .subscribe({
        next: (tags) => {
          this.tags = tags;
        },
        error: (error) => {
          this.error = 'Failed to load tags. Please try again.';
          console.error('Error loading tags:', error);
        }
      });
  }

  onTagChange(event: Event, tag: Tag) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedTags.push(tag.id);
      // Update selected language based on the first selected tag
      if (this.selectedTags.length === 1) {
        this.selectedLanguage = tag.name.toLowerCase();
      }
    } else {
      this.selectedTags = this.selectedTags.filter(id => id !== tag.id);
      // Update language if the unselected tag was the current language
      if (tag.name.toLowerCase() === this.selectedLanguage && this.selectedTags.length > 0) {
        const newTag = this.tags.find(t => t.id === this.selectedTags[0]);
        if (newTag) {
          this.selectedLanguage = newTag.name.toLowerCase();
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    this.success = false;
    this.error = '';

    if (this.snippetForm.invalid || this.selectedTags.length === 0) {
      if (this.selectedTags.length === 0) {
        this.error = 'Please select at least one tag';
      }
      return;
    }

    const token = this.authService.getToken();
    if (!token) {
      this.error = 'You must be logged in to create snippets';
      return;
    }

    const payload = {
      ...this.snippetForm.value,
      tagIds: this.selectedTags,
      programmingLanguage: this.getProgrammingLanguage()
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    this.http.post(
      'https://localhost:7082/api/CodeSnippets',
      payload,
      { headers, withCredentials: true }
    ).subscribe({
      next: () => {
        this.success = true;
        this.snippetCreated.emit();
        setTimeout(() => {
          this.closeModal();
        }, 2000);
      },
      error: (error) => {
        this.error = 'Failed to create code snippet. Please try again.';
        console.error('Error creating snippet:', error);
      }
    });
  }

  getProgrammingLanguage(): string {
    const selectedTag = this.tags.find(tag => this.selectedTags.includes(tag.id));
    return selectedTag ? selectedTag.name : '';
  }

  resetForm() {
    this.submitted = false;
    this.success = false;
    this.error = '';
    this.snippetForm.reset({
      createdById: this.authService.getUserUsername()
    });
    this.selectedTags = [];
    this.previewMode = false;
  }
}