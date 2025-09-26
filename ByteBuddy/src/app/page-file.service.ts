import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { FileUploadResponseDto } from './page.types'
import { AuthService } from './auth.service'
import { FileUploadService } from './file-upload.service'

@Injectable({
    providedIn: 'root',
})
export class PageFileService {
    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private fileUploadService: FileUploadService
    ) {}

    /**
     * Upload an image file independently
     * Returns fileId that can be associated with a page later
     */
    uploadPageImage(file: File): Observable<FileUploadResponseDto> {
        // Delegate to the new FileUploadService for independent file upload
        return this.fileUploadService.uploadFile(file)
    }

    /**
     * Delete a file by file ID
     */
    deleteFile(fileId: number): Observable<any> {
        // Delegate to the new FileUploadService
        return this.fileUploadService.deleteFile(fileId)
    }

    /**
     * Get file information by file ID
     */
    getFileInfo(fileId: number): Observable<any> {
        // Delegate to the new FileUploadService
        return this.fileUploadService.getFileInfo(fileId)
    }

    /**
     * Download a file by file ID
     */
    downloadFile(fileId: number): Observable<Blob> {
        // Delegate to the new FileUploadService
        return this.fileUploadService.downloadFile(fileId)
    }

    /**
     * Check if a file type is an image
     */
    isImageFile(file: File): boolean {
        return this.fileUploadService.isImageFile(file)
    }

    /**
     * Check if file size is within limits (e.g., 5MB)
     */
    isValidFileSize(file: File, maxSizeMB: number = 5): boolean {
        return this.fileUploadService.isValidFileSize(file, maxSizeMB)
    }

    /**
     * Get allowed image file types
     */
    getAllowedImageTypes(): string[] {
        return this.fileUploadService.getAllowedImageTypes()
    }

    /**
     * Validate if the uploaded file is an allowed image type
     */
    isAllowedImageType(file: File): boolean {
        return this.fileUploadService.isAllowedImageType(file)
    }
}
