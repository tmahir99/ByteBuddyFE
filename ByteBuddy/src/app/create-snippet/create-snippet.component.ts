import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

interface Tag {
  id: number;
  name: string;
  area: string;
}

@Component({
  selector: 'app-create-snippet',
  templateUrl: './create-snippet.component.html',
  styleUrls: ['./create-snippet.component.css']
})
export class CreateSnippetComponent implements OnInit {
  snippetForm: FormGroup;
  tags: Tag[] = [];
  submitted = false;
  success = false;
  error = '';
  selectedTags: number[] = [];

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
      createdById: this.authService.getUserUsername(), // Replace with actual user ID
    });
  }

  ngOnInit() {
    this.loadTags();
  }

  get f() { 
    return this.snippetForm.controls; 
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
    } else {
      this.selectedTags = this.selectedTags.filter(id => id !== tag.id);
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

    console.log(this.authService.getToken())

    const payload = {
      ...this.snippetForm.value,
      tagIds: this.selectedTags,
      programmingLanguage: this.getProgrammingLanguage()
    };
    const token = this.authService.getToken()

    if (token) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        })

    this.http.post(
      'https://localhost:7082/api/CodeSnippets',
      payload,
      { headers, withCredentials: true}
    ).subscribe({
      next: () => {
        this.success = true;
        this.resetForm();
      },
      error: (error) => {
        this.error = 'Failed to create code snippet. Please try again.';
        console.error('Error creating snippet:', error);
      }
    });
  }
  else{
    console.error('Token not found.')
  }
    
  }

  getProgrammingLanguage(): string {
    const selectedTag = this.tags.find(tag => this.selectedTags.includes(tag.id));
    return selectedTag ? selectedTag.name : '';
  }

  resetForm() {
    this.submitted = false;
    this.snippetForm.reset();
    this.selectedTags = [];

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }
}