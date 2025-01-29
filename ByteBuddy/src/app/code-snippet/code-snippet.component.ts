import { Component, Input } from '@angular/core';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-code-snippet',
  template: `
    <div class="code-snippet-container">
      <div class="code-snippet-header">
        <h3>{{ title }}</h3>
        <button 
          class="copy-button" 
          (click)="copyToClipboard()"
          [disabled]="copied"
        >
          {{ copied ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      
      <div *ngIf="description" class="code-snippet-description">
        {{ description }}
      </div>
      
      <pre><code 
        [innerHTML]="highlightedCode" 
        class="language-{{ language }}"
      ></code></pre>
      
      <div class="code-snippet-footer">
        <div class="tags">
          <span 
            *ngFor="let tag of tags" 
            class="tag"
          >
            {{ tag.name }}
          </span>
        </div>
        
        <div class="metadata">
          <span>👍 {{ likesCount }}</span>
          <span>💬 {{ commentsCount }}</span>
        </div>
      </div>
      
      <div *ngIf="createdAt" class="created-at">
        Created at: {{ createdAt | date }}
      </div>
      
      <div *ngIf="createdBy" class="created-by">
        Created by: {{ createdBy }}
      </div>
      
      <a *ngIf="fileUrl" class="file-url" [href]="fileUrl">Download Code</a>
    </div>
  `,
  styles: [`
    .code-snippet-container {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      background-color: #f4f4f4;
    }
    
    .code-snippet-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    
    .copy-button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .code-snippet-description {
      margin-bottom: 12px;
      color: #666;
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
    
    .code-snippet-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
    }
    
    .tags .tag {
      background-color: #e0e0e0;
      padding: 4px 8px;
      margin-right: 8px;
      border-radius: 4px;
      font-size: 12px;
    }
    
    .created-at, .created-by {
      font-size: 12px;
      color: #888;
    }
    
    .file-url {
      display: block;
      margin-top: 10px;
      color: #007BFF;
      text-decoration: none;
    }
  `]
})
export class CodeSnippetComponent {
  @Input() id: string = '';
  @Input() title: string = 'Code Snippet';
  @Input() description?: string;
  @Input() codeContent: string = '';
  @Input() language: string = 'javascript';
  @Input() tags: { name: string }[] = [];
  @Input() likesCount: number = 0;
  @Input() commentsCount: number = 0;
  @Input() createdAt?: Date;
  @Input() createdBy?: string;
  @Input() fileUrl?: string;

  copied: boolean = false;
  
  get highlightedCode(): string {
    // Remove first line (language specification)
    const cleanCode = this.codeContent.split('\n').slice(1).join('\n').trim();
    return highlight(cleanCode, languages[this.language], this.language);
  }

  constructor(private notificationService: NotificationService) {}

  copyToClipboard(): void {
    const cleanCode = this.codeContent.split('\n').slice(1).join('\n').trim();
    navigator.clipboard.writeText(cleanCode).then(() => {
      this.copied = true;
      this.notificationService.showSuccess('Code copied to clipboard!');

      setTimeout(() => this.copied = false, 2000);
    });
  }
}