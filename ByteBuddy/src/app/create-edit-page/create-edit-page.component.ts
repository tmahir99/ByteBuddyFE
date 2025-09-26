import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PageDto, CreatePageDto, UpdatePageDto } from '../page.types'
import { PageService } from '../page.service'
import { PageFileService } from '../page-file.service'
import { NotificationService } from '../notification.service'

@Component({
    selector: 'app-create-edit-page',
    templateUrl: './create-edit-page.component.html',
    styleUrls: ['./create-edit-page.component.css'],
})
export class CreateEditPageComponent implements OnInit {
    pageForm!: FormGroup
    isLoading = false
    isSubmitting = false
    isEditMode = false
    pageId: number | null = null
    error: string | null = null

    // Image upload properties
    selectedFile: File | null = null
    currentImageUrl: string | null = null
    imagePreview: string | null = null
    uploadedFileId: number | null = null // Store the fileId from upload response
    isUploadingImage = false
    isDeletingImage = false
    maxImageSizeMB = 5

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private pageService: PageService,
        private pageFileService: PageFileService,
        private notificationService: NotificationService
    ) {
        this.initForm()
    }

    ngOnInit() {
        // Check if we're in edit mode
        this.route.params.subscribe((params) => {
            if (params['id']) {
                this.isEditMode = true
                this.pageId = +params['id']
                this.loadPageForEdit()
            }
        })

        // Check if user is authenticated
        if (!this.pageService.isAuthenticated()) {
            this.notificationService.showError(
                'Please log in to create or edit pages'
            )
            this.router.navigate(['/login'])
            return
        }
    }

    initForm() {
        this.pageForm = this.fb.group({
            title: ['', [Validators.required, Validators.maxLength(200)]],
            description: ['', [Validators.maxLength(1000)]],
        })
    }

    loadPageForEdit() {
        if (!this.pageId) return

        this.isLoading = true
        this.error = null

        this.pageService.getPageById(this.pageId).subscribe({
            next: (page) => {
                // Check if current user can edit this page
                if (page.createdById !== this.pageService.getCurrentUserId()) {
                    this.notificationService.showError(
                        'You can only edit your own pages'
                    )
                    this.router.navigate(['/pages'])
                    return
                }

                this.pageForm.patchValue({
                    title: page.title,
                    description: page.description || '',
                })

                // Set current image URL if exists
                this.currentImageUrl = page.imageUrl || null
                this.isLoading = false
            },
            error: (error) => {
                console.error('Error loading page:', error)
                this.error = 'Failed to load page for editing'
                this.notificationService.showError('Failed to load page')
                this.isLoading = false
            },
        })
    }

    onSubmit() {
        if (this.pageForm.invalid) {
            this.markFormGroupTouched(this.pageForm)
            return
        }

        this.isSubmitting = true
        this.error = null

        const formValue = this.pageForm.value
        const currentUserId = this.pageService.getCurrentUserId()

        if (!currentUserId) {
            this.notificationService.showError('User authentication required')
            this.router.navigate(['/login'])
            return
        }

        if (this.isEditMode && this.pageId) {
            // Update existing page
            const updateData: UpdatePageDto = {
                title: formValue.title,
                description: formValue.description || undefined,
                createdById: currentUserId,
                imageUrl: this.currentImageUrl || undefined,
            }

            this.pageService.updatePage(this.pageId, updateData).subscribe({
                next: () => {
                    this.notificationService.showSuccess(
                        'Page updated successfully'
                    )
                    this.router.navigate(['/pages', this.pageId])
                },
                error: (error) => {
                    console.error('Error updating page:', error)
                    this.error = 'Failed to update page. Please try again.'
                    this.notificationService.showError('Failed to update page')
                    this.isSubmitting = false
                },
            })
        } else {
            // Create new page
            const createData: CreatePageDto = {
                title: formValue.title,
                description: formValue.description || undefined,
                createdById: currentUserId,
                imageUrl: this.currentImageUrl || undefined,
            }

            this.pageService.createPage(createData).subscribe({
                next: (createdPage) => {
                    this.notificationService.showSuccess(
                        'Page created successfully'
                    )
                    this.router.navigate(['/pages', createdPage.id])
                },
                error: (error) => {
                    console.error('Error creating page:', error)
                    this.error = 'Failed to create page. Please try again.'
                    this.notificationService.showError('Failed to create page')
                    this.isSubmitting = false
                },
            })
        }
    }

    onCancel() {
        if (this.isEditMode && this.pageId) {
            this.router.navigate(['/pages', this.pageId])
        } else {
            this.router.navigate(['/pages'])
        }
    }

    // Form validation helpers
    isFieldInvalid(fieldName: string): boolean {
        const field = this.pageForm.get(fieldName)
        return !!(field && field.invalid && (field.dirty || field.touched))
    }

    getFieldError(fieldName: string): string {
        const field = this.pageForm.get(fieldName)
        if (!field || !field.errors) return ''

        const errors = field.errors
        if (errors['required']) {
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`
        }
        if (errors['maxlength']) {
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} cannot exceed ${errors['maxlength'].requiredLength} characters`
        }
        return ''
    }

    private markFormGroupTouched(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach((key) => {
            const control = formGroup.get(key)
            control?.markAsTouched()

            if (control instanceof FormGroup) {
                this.markFormGroupTouched(control)
            }
        })
    }

    // Character count helpers
    getTitleCharCount(): number {
        return this.pageForm.get('title')?.value?.length || 0
    }

    getDescriptionCharCount(): number {
        return this.pageForm.get('description')?.value?.length || 0
    }

    getTitle(): string {
        return this.isEditMode ? 'Edit Page' : 'Create New Page'
    }

    getSubmitButtonText(): string {
        if (this.isSubmitting) {
            return this.isEditMode ? 'Updating...' : 'Creating...'
        }
        return this.isEditMode ? 'Update Page' : 'Create Page'
    }

    getCurrentUserName(): string | null {
        return this.pageService.getCurrentUserName()
    }

    // Image upload methods
    onFileSelected(event: Event) {
        const target = event.target as HTMLInputElement
        const file = target.files?.[0]

        if (!file) return

        // Validate file type
        if (!this.pageFileService.isAllowedImageType(file)) {
            this.notificationService.showError(
                `Invalid file type. Please select: ${this.pageFileService.getAllowedImageTypes().join(', ')}`
            )
            return
        }

        // Validate file size
        if (!this.pageFileService.isValidFileSize(file, this.maxImageSizeMB)) {
            this.notificationService.showError(
                `File size too large. Maximum size is ${this.maxImageSizeMB}MB`
            )
            return
        }

        this.selectedFile = file

        // Create preview
        const reader = new FileReader()
        reader.onload = (e) => {
            this.imagePreview = e.target?.result as string
        }
        reader.readAsDataURL(file)
    }

    uploadImage() {
        if (!this.selectedFile) {
            this.notificationService.showError('Please select a file first')
            return
        }

        // For new pages, we need to create the page first to get an ID
        if (!this.isEditMode) {
            this.notificationService.showInfo(
                'Page will be created first, then image will be uploaded'
            )
            this.createPageWithImage()
            return
        }

        if (!this.pageId) {
            this.notificationService.showError('Page ID not found')
            return
        }

        this.isUploadingImage = true

        this.pageFileService
            .uploadPageImage(this.selectedFile)
            .subscribe({
                next: (response) => {
                    if (response.isSucceed && response.fileUrl && response.fileId) {
                        this.currentImageUrl = response.fileUrl
                        this.uploadedFileId = response.fileId // Store the fileId for later use
                        this.notificationService.showSuccess(
                            'Image uploaded successfully'
                        )
                        this.clearImageSelection()
                    } else {
                        this.notificationService.showError(
                            response.message || 'Failed to upload image'
                        )
                    }
                    this.isUploadingImage = false
                },
                error: (error) => {
                    console.error('Error uploading image:', error)
                    this.notificationService.showError('Failed to upload image')
                    this.isUploadingImage = false
                },
            })
    }

    deleteImage() {
        if (!this.currentImageUrl || !this.pageId) return

        this.isDeletingImage = true

        this.pageFileService.deleteFile(this.pageId).subscribe({
            next: (response: any) => {
                if (response.isSucceed) {
                    this.currentImageUrl = null
                    this.notificationService.showSuccess(
                        'Image deleted successfully'
                    )
                } else {
                    this.notificationService.showError(
                        response.message || 'Failed to delete image'
                    )
                }
                this.isDeletingImage = false
            },
            error: (error: any) => {
                console.error('Error deleting image:', error)
                this.notificationService.showError('Failed to delete image')
                this.isDeletingImage = false
            },
        })
    }

    clearImageSelection() {
        this.selectedFile = null
        this.imagePreview = null

        // Clear the file input
        const fileInput = document.getElementById(
            'imageInput'
        ) as HTMLInputElement
        if (fileInput) {
            fileInput.value = ''
        }
    }

    private createPageWithImage() {
        if (this.pageForm.invalid) return

        const formValue = this.pageForm.value
        const currentUserId = this.pageService.getCurrentUserId()

        if (!currentUserId) {
            this.notificationService.showError('User authentication required')
            return
        }

        this.isSubmitting = true

        // NEW WORKFLOW: Upload file first, then create page with fileId
        if (this.selectedFile) {
            this.isUploadingImage = true
            this.pageFileService
                .uploadPageImage(this.selectedFile)
                .subscribe({
                    next: (uploadResponse) => {
                        if (uploadResponse.isSucceed && uploadResponse.fileId) {
                            // Create page with fileId included in payload
                            const createData: CreatePageDto = {
                                title: formValue.title,
                                description: formValue.description || undefined,
                                createdById: currentUserId,
                                fileId: uploadResponse.fileId // Include fileId in creation payload
                            }

                            this.pageService.createPage(createData).subscribe({
                                next: (createdPage) => {
                                    this.notificationService.showSuccess(
                                        'Page created with image successfully'
                                    )
                                    this.router.navigate(['/pages', createdPage.id])
                                    this.isSubmitting = false
                                    this.isUploadingImage = false
                                },
                                error: (error) => {
                                    console.error('Error creating page:', error)
                                    this.notificationService.showError(
                                        'Failed to create page'
                                    )
                                    this.isSubmitting = false
                                    this.isUploadingImage = false
                                }
                            })
                        } else {
                            this.notificationService.showError(
                                'Failed to upload image'
                            )
                            this.isSubmitting = false
                            this.isUploadingImage = false
                        }
                    },
                    error: (error: any) => {
                        console.error('Error uploading image:', error)
                        this.notificationService.showError('Failed to upload image')
                        this.isSubmitting = false
                        this.isUploadingImage = false
                    }
                })
        } else {
            // Create page without image
            const createData: CreatePageDto = {
                title: formValue.title,
                description: formValue.description || undefined,
                createdById: currentUserId,
            }

            this.pageService.createPage(createData).subscribe({
                next: (createdPage: any) => {
                    this.notificationService.showSuccess(
                        'Page created successfully'
                    )
                    this.router.navigate(['/pages', createdPage.id])
                    this.isSubmitting = false
                },
                error: (error: any) => {
                    console.error('Error creating page:', error)
                    this.notificationService.showError('Failed to create page')
                    this.isSubmitting = false
                }
            })
        }
    }

    // Helper methods for template
    hasImageToDisplay(): boolean {
        return !!(this.currentImageUrl || this.imagePreview)
    }

    getImageToDisplay(): string | null {
        return this.imagePreview || this.currentImageUrl
    }

    getAllowedImageTypes(): string {
        return this.pageFileService.getAllowedImageTypes().join(', ')
    }

    triggerFileInput() {
        const fileInput = document.getElementById(
            'imageInput'
        ) as HTMLInputElement
        if (fileInput) {
            fileInput.click()
        }
    }
}
