import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'

// File upload response interface based on new documentation
export interface FileUploadResponseDto {
    fileId: number
    isSucceed: boolean
    message: string
    fileUrl: string
    fileName: string
    fileSize: number
    contentType: string
}

@Injectable({
    providedIn: 'root',
})
export class FileUploadService {
    private readonly apiUrl = ' https://7137430cb0f4.ngrok-free.app/api'
    private readonly fileEndpoint = `${this.apiUrl}/file`

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    private getAuthHeaders() {
        const token = this.authService.getToken()
        const headers: Record<string, string> = {}

        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        return headers
    }

    /**
     * Upload a file independently (not tied to any specific entity)
     * @param file - The file to upload
     * @returns Observable<FileUploadResponseDto> - Returns fileId for later association
     */
    uploadFile(file: File): Observable<FileUploadResponseDto> {
        const formData = new FormData()
        formData.append('file', file, file.name)

        return this.http.post<FileUploadResponseDto>(
            `${this.fileEndpoint}/upload`,
            formData,
            {
                headers: this.getAuthHeaders(),
            }
        )
    }

    /**
     * Delete a file by file ID
     * @param fileId - The ID of the file to delete
     * @returns Observable<any>
     */
    deleteFile(fileId: number): Observable<any> {
        return this.http.delete(
            `${this.fileEndpoint}/delete/${fileId}`,
            {
                headers: this.getAuthHeaders(),
            }
        )
    }

    /**
     * Get file information by file ID
     * @param fileId - The ID of the file
     * @returns Observable<any>
     */
    getFileInfo(fileId: number): Observable<any> {
        return this.http.get(`${this.fileEndpoint}/info/${fileId}`, {
            headers: this.getAuthHeaders(),
        })
    }

    /**
     * Download a file by file ID
     * @param fileId - The ID of the file
     * @returns Observable<Blob>
     */
    downloadFile(fileId: number): Observable<Blob> {
        return this.http.get(`${this.fileEndpoint}/download/${fileId}`, {
            headers: this.getAuthHeaders(),
            responseType: 'blob',
        })
    }

    /**
     * Check if a file type is an image
     * @param file - The file to check
     * @returns boolean
     */
    isImageFile(file: File): boolean {
        return file.type.startsWith('image/')
    }

    /**
     * Check if file size is within limits
     * @param file - The file to check
     * @param maxSizeMB - Maximum size in MB (default: 5MB)
     * @returns boolean
     */
    isValidFileSize(file: File, maxSizeMB: number = 5): boolean {
        const maxSizeBytes = maxSizeMB * 1024 * 1024
        return file.size <= maxSizeBytes
    }

    /**
     * Get allowed image file types
     * @returns string[] - Array of allowed MIME types
     */
    getAllowedImageTypes(): string[] {
        return [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/webp',
        ]
    }

    /**
     * Validate if the uploaded file is an allowed image type
     * @param file - The file to validate
     * @returns boolean
     */
    isAllowedImageType(file: File): boolean {
        return this.getAllowedImageTypes().includes(file.type.toLowerCase())
    }

    /**
     * Get allowed file types for code snippets (more permissive than just images)
     * @returns string[] - Array of allowed MIME types
     */
    getAllowedFileTypes(): string[] {
        return [
            // Images
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'image/webp',
            // Text files
            'text/plain',
            'text/csv',
            'application/json',
            'application/xml',
            'text/xml',
            // Documents
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            // Archives
            'application/zip',
            'application/x-rar-compressed',
            'application/x-tar',
            'application/gzip',
        ]
    }

    /**
     * Validate if the uploaded file is an allowed file type
     * @param file - The file to validate
     * @returns boolean
     */
    isAllowedFileType(file: File): boolean {
        return this.getAllowedFileTypes().includes(file.type.toLowerCase())
    }
}
