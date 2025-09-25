import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import {
    PageDto,
    CreatePageDto,
    UpdatePageDto,
    PageDtoPaginatedResult,
    LikeDto,
    PageSearchRequest,
    ApplicationUserDto,
} from './page.types'
import { AuthService } from './auth.service'

@Injectable({
    providedIn: 'root',
})
export class PageService {
    private readonly apiUrl = 'https://5d3a83e6fb53.ngrok-free.app/api'
    private readonly pageEndpoint = `${this.apiUrl}/Page`

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {}

    private getAuthHeaders() {
        const token = this.authService.getToken()
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true',
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`
        }

        return headers
    }

    // Get all pages with filtering and pagination
    getPages(request?: PageSearchRequest): Observable<PageDtoPaginatedResult> {
        let params = new HttpParams()

        if (request?.searchTerm) {
            params = params.set('searchTerm', request.searchTerm)
        }
        if (request?.createdById) {
            params = params.set('createdById', request.createdById)
        }
        if (request?.createdAfter) {
            params = params.set('createdAfter', request.createdAfter)
        }
        if (request?.createdBefore) {
            params = params.set('createdBefore', request.createdBefore)
        }
        if (request?.sortBy) {
            params = params.set('sortBy', request.sortBy)
        }
        if (request?.page) {
            params = params.set('page', request.page.toString())
        }
        if (request?.pageSize) {
            params = params.set('pageSize', request.pageSize.toString())
        }

        return this.http.get<PageDtoPaginatedResult>(this.pageEndpoint, {
            params,
            headers: this.getAuthHeaders(),
            withCredentials: true,
        })
    }

    // Get single page by ID
    getPageById(id: number): Observable<PageDto> {
        return this.http.get<PageDto>(`${this.pageEndpoint}/${id}`, {
            headers: this.getAuthHeaders(),
            withCredentials: true,
        })
    }

    // Get pages by user ID
    getPagesByUserId(userId: string): Observable<PageDto[]> {
        return this.http.get<PageDto[]>(`${this.pageEndpoint}/user/${userId}`, {
            headers: this.getAuthHeaders(),
            withCredentials: true,
        })
    }

    // Create a new page
    createPage(pageData: CreatePageDto): Observable<PageDto> {
        return this.http.post<PageDto>(this.pageEndpoint, pageData, {
            headers: this.getAuthHeaders(),
            withCredentials: true,
        })
    }

    // Update an existing page
    updatePage(id: number, pageData: UpdatePageDto): Observable<void> {
        return this.http.put<void>(`${this.pageEndpoint}/${id}`, pageData, {
            headers: this.getAuthHeaders(),
            withCredentials: true,
        })
    }

    // Delete a page
    deletePage(id: number): Observable<void> {
        return this.http.delete<void>(`${this.pageEndpoint}/${id}`, {
            headers: this.getAuthHeaders(),
            withCredentials: true,
        })
    }

    // Like/Unlike a page
    likePage(id: number): Observable<PageDto> {
        return this.http.post<PageDto>(
            `${this.pageEndpoint}/${id}/like`,
            {},
            {
                headers: this.getAuthHeaders(),
                withCredentials: true,
            }
        )
    }

    // Get users who liked a page
    getPageLikers(id: number): Observable<ApplicationUserDto[]> {
        return this.http.get<ApplicationUserDto[]>(
            `${this.pageEndpoint}/${id}/likers`,
            {
                headers: this.getAuthHeaders(),
                withCredentials: true,
            }
        )
    }

    // Helper methods for current user
    getCurrentUserId(): string | null {
        return this.authService.getUserId()
    }

    getCurrentUserName(): string | null {
        return this.authService.getUserUsername()
    }

    isAuthenticated(): boolean {
        return this.authService.isLoggedIn()
    }
}
