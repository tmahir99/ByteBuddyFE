export interface ApplicationUser {
    id?: string
    userName?: string
    firstName?: string
    lastName?: string
    email?: string
    dateOfBirth?: string
    gender?: string
    birthPlace?: string
    address?: string
    roles?: string[]
}

export interface Tag {
    id: number
    name: string
    area: string
}

export interface Like {
    id: number
    userId: string
    codeSnippetId: number
    createdAt: string
}

export interface Comment {
    id: number
    content: string
    createdAt: string
    createdBy: ApplicationUser
}

export interface CodeSnippet {
    id: number
    title: string
    codeContent: string
    description: string
    programmingLanguage: string
    fileUrl: string
    createdAt: string
    createdById: string
    createdBy: ApplicationUser
    tags: Tag[]
    likesCount: number
    commentsCount: number
    likedByUsers: string[]
}

export interface PagedResponse<T> {
    items: T[]
    totalCount: number
    pageSize: number
    currentPage: number
    totalPages: number
}
