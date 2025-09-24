import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthService } from '../auth.service'
import { PermissionService } from '../permission.service'
import { ProfileService } from '../profile/profile.service'
import { ApplicationUserDto } from '../profile/profile.types'

import { NavigationEnd, Router } from '@angular/router'
import {
    Subject,
    Subscription,
    debounceTime,
    distinctUntilChanged,
    switchMap,
    takeUntil,
} from 'rxjs'

@Component({
    selector: 'app-custom-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    private routeSubscription: Subscription | undefined
    private destroy$ = new Subject<void>()
    private searchSubject = new Subject<string>()

    public hide: boolean = false
    public currentUser: string | null = ''
    public isMobileMenuOpen: boolean = false
    public searchQuery: string = ''
    public searchResults: ApplicationUserDto[] = []
    public isSearching: boolean = false
    public showSearchResults: boolean = false

    constructor(
        public authService: AuthService,
        private router: Router,
        private prermisionService: PermissionService,
        private profileService: ProfileService
    ) {}
    goToProfile(userId?: string | null) {
        if (!userId) return
        this.router.navigate(['/profile', userId])
    }
    canViewJobs(): boolean {
        return (
            this.prermisionService.isAdmin() ||
            this.prermisionService.isSuperAdmin() ||
            this.prermisionService.isProductionWorker() ||
            this.prermisionService.isCarrier() ||
            this.prermisionService.isOwner()
        )
    }

    canViewManageUsers(): boolean {
        return (
            this.prermisionService.isAdmin() ||
            this.prermisionService.isSuperAdmin() ||
            this.prermisionService.isOwner()
        )
    }

    canViewOrders(): boolean {
        return (
            this.prermisionService.isAdmin() ||
            this.prermisionService.isSuperAdmin() ||
            this.prermisionService.isOwner() ||
            this.prermisionService.isProcurement() ||
            this.prermisionService.isEngineer() ||
            this.prermisionService.isProductionWorker()
        )
    }

    canViewDocuments(): boolean {
        return (
            this.prermisionService.isAdmin() ||
            this.prermisionService.isSuperAdmin() ||
            this.prermisionService.isOwner()
        )
    }
    ngOnInit(): void {
        this.currentUser = this.authService.getUserName()
        this.routeSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.checkLoginRoute()
            }
        })

        // Setup search functionality
        this.searchSubject
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                switchMap((query) => {
                    if (query.trim().length >= 2) {
                        this.isSearching = true
                        return this.profileService.searchUsers(query)
                    } else {
                        this.isSearching = false
                        this.searchResults = []
                        this.showSearchResults = false
                        return []
                    }
                }),
                takeUntil(this.destroy$)
            )
            .subscribe({
                next: (results) => {
                    this.searchResults = results
                    this.isSearching = false
                    this.showSearchResults = results.length > 0
                },
                error: () => {
                    this.isSearching = false
                    this.searchResults = []
                    this.showSearchResults = false
                },
            })
    }

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe()
        }
    }

    checkLoginRoute(): void {
        const route = this.router.url.slice(1)
        if (route === 'login' || route === 'register') {
            this.hide = true
        } else {
            this.hide = false
        }
    }

    logoutUser() {
        this.authService.logoutUser()
        this.router.navigate(['/login'])
    }

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false
    }

    onSearchInput(event: Event): void {
        const target = event.target as HTMLInputElement
        this.searchQuery = target.value
        this.searchSubject.next(this.searchQuery)
    }

    onSearchFocus(): void {
        if (this.searchResults.length > 0) {
            this.showSearchResults = true
        }
    }

    onSearchBlur(): void {
        // Delay hiding to allow clicking on results
        setTimeout(() => {
            this.showSearchResults = false
        }, 200)
    }

    selectUser(user: ApplicationUserDto): void {
        this.showSearchResults = false
        this.searchQuery = ''
        this.searchResults = []
        this.goToProfile(user.id || user.userName)
    }

    getUserDisplayName(user: ApplicationUserDto): string {
        if (user.fullName) {
            return user.fullName
        }
        const names = [user.firstName, user.lastName].filter((name) => name)
        return names.join(' ') || user.userName || 'User'
    }

    clearSearch(): void {
        this.searchQuery = ''
        this.searchResults = []
        this.showSearchResults = false
    }

    trackByUserId(index: number, user: ApplicationUserDto): string {
        return user.id || user.userName || index.toString()
    }
}
