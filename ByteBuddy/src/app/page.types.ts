export interface ApplicationUserDto {
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
    fullName?: string
}

export interface PageDto {
    id: number
    title: string
    description?: string | null
    imageUrl?: string | null // Added for file/image support
    fileId?: number | null // Added for linking uploaded files
    createdAt: Date
    createdById?: string | null
    createdBy?: ApplicationUserDto
    likesCount: number
    isLikedByCurrentUser: boolean
}

export interface CreatePageDto {
    title: string
    description?: string
    createdById: string
    imageUrl?: string // Added for file/image support
    fileId?: number // Added for linking uploaded files
}

export interface UpdatePageDto {
    title: string
    description?: string
    createdById: string
    imageUrl?: string // Added for file/image support
    fileId?: number // Added for linking uploaded files
}

export interface PageDtoPaginatedResult {
    items?: PageDto[]
    totalCount: number
    pageSize: number
    currentPage: number
    totalPages: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export interface LikeDto {
    id: number
    userId?: string
    user?: ApplicationUserDto
    codeSnippetId?: number
    pageId?: number
    createdAt: string
}

export interface PageSearchRequest {
    searchTerm?: string
    createdById?: string
    createdAfter?: string
    createdBefore?: string
    sortBy?: string
    page?: number
    pageSize?: number
}

// File upload related types for Pages
export interface FileUploadResponseDto {
    fileId: number
    isSucceed: boolean
    message?: string
    fileUrl?: string
    fileName?: string
    fileSize: number
    contentType?: string
}
