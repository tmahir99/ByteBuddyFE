import { Component, Input, OnInit } from '@angular/core';

interface User {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string | null;
  dateOfBirth: string;
  gender: string | null;
  birthPlace: string | null;
  address: string | null;
  roles: string | null;
}

interface Tag {
  id: number;
  name: string;
  area: string;
  codeSnippets: null;
}

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.css']
})
export class CodeSnippetComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() codeContent: string = '';
  @Input() description: string = '';
  @Input() programmingLanguage: string = 'javascript';
  @Input() fileUrl: string = '';
  @Input() createdAt: string = '';
  @Input() createdBy: User = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: null,
    dateOfBirth: '',
    gender: null,
    birthPlace: null,
    address: null,
    roles: null
  };
  @Input() tags: Tag[] = [];
  @Input() likesCount: number = 0;
  @Input() commentsCount: number = 0;
  @Input() createdById: string = '';

  constructor() { }

  onCopyToClipboard(): void {
    console.log('onCopyToClipboard');
  }

  ngOnInit(): void {
    // Initialization logic, if any
  }

  get language(): string {
    const lang = this.programmingLanguage.toLowerCase();
    const languageMap: { [key: string]: string } = {
      'c#': 'csharp',
      'c++': 'cpp',
      // Add more mappings as needed
    };
    return languageMap[lang] || lang;
  }
}