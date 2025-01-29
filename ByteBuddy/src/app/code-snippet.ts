export interface User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dateOfBirth: string;
    gender: string;
    birthPlace: string;
    address: string;
    roles: string[];
  }
  
  export interface Tag {
    id: number;
    name: string;
    area: string;
  }
  
  export interface Like {
    id: number;
    userId: string;
    codeSnippetId: number;
    createdAt: string;
  }
  
  export interface Comment {
    id: number;
    content: string;
    createdAt: string;
    createdById: string;
  }
  
  export interface CodeSnippet {
    id: number;
    title: string;
    codeContent: string;
    description: string;
    programmingLanguage: string;
    fileUrl: string;
    createdAt: string;
    createdById: string;
    createdBy: User;
    tags: Tag[];
    likesCount: number;
    commentsCount: number;
  }
  
  export interface PagedResponse<T> {
    items: T[];
    totalCount: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
  }
  