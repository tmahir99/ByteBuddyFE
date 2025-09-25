import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { FileUploadResponseDto } from './page.types'
import { AuthService } from './auth.service'

@Injectable({
    providedIn: 'root',
})
export class PageFileService {
    private readonly apiUrl = 'https://5d3a83e6fb53.ngrok-free.app/api'
    private readonly fileEndpoint = `${this.apiUrl}/File`

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    private getAuthHeaders() {
        const token = this.authService.getToken()
        const headers: Record<string, string> = {
            'ngrok-skip-browser-warning': 'true',
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        return headers
    }

    /**
     * Upload an image file for a page
     * Uses the page ID as the "codeSnippetId" parameter to work with existing API
     */
    uploadPageImage(
        pageId: number,
        file: File
    ): Observable<FileUploadResponseDto> {
        const formData = new FormData()
        formData.append('file', file, file.name)
        formData.append('codeSnippetId', pageId.toString()) // Use pageId as codeSnippetId

        return this.http.post<FileUploadResponseDto>(
            `${this.fileEndpoint}/upload`,
            formData,
            {
                headers: this.getAuthHeaders(),
                withCredentials: true,
            }
        )
    }

    /**
     * Delete an image file for a page
     * Uses the page ID as the "codeSnippetId" parameter to work with existing API
     */
    deletePageImage(pageId: number): Observable<FileUploadResponseDto> {
        return this.http.delete<FileUploadResponseDto>(
            `${this.fileEndpoint}/delete/${pageId}`,
            {
                headers: this.getAuthHeaders(),
                withCredentials: true,
            }
        )
    }

    /**
     * Get file information for a page
     * Uses the page ID as the "codeSnippetId" parameter to work with existing API
     */
    getPageFileInfo(pageId: number): Observable<any> {
        return this.http.get(`${this.fileEndpoint}/info/${pageId}`, {
            headers: this.getAuthHeaders(),
            withCredentials: true,
        })
    }

    /**
     * Download a file for a page
     * Uses the page ID as the "codeSnippetId" parameter to work with existing API
     */
    downloadPageFile(pageId: number): Observable<Blob> {
        return this.http.get(`${this.fileEndpoint}/download/${pageId}`, {
            headers: this.getAuthHeaders(),
            withCredentials: true,
            responseType: 'blob',
        })
    }

    /**
     * Check if a file type is an image
     */
    isImageFile(file: File): boolean {
        return file.type.startsWith('image/')
    }

    /**
     * Check if file size is within limits (e.g., 5MB)
     */
    isValidFileSize(file: File, maxSizeMB: number = 5): boolean {
        const maxSizeBytes = maxSizeMB * 1024 * 1024
        return file.size <= maxSizeBytes
    }

    /**
     * Get allowed image file types
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
     */
    isAllowedImageType(file: File): boolean {
        return this.getAllowedImageTypes().includes(file.type.toLowerCase())
    }
}
