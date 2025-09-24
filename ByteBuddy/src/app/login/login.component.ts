import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    loginForm: FormGroup
    isLoading: boolean = false

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.isLoading = true
            const { username, password } = this.loginForm.value
            this.authService.login(username, password).subscribe(
                (response) => {
                    console.log('Login response', response)
                    this.authService.storeToken(response.message)
                    this.authService.storeUserName(response.user.firstName)
                    this.authService.storeUserSurname(response.user.lastName)
                    this.authService.storeUserUsername(response.user.userName)
                    if (response.user.id) {
                        this.authService.storeUserId(response.user.id)
                    }
                    this.authService.storeUserRoles(response.user.roles)

                    this.router.navigate(['/home'])
                    this.isLoading = false
                },
                (error) => {
                    console.error('Login error', error)
                    this.isLoading = false
                }
            )
        }
    }
}
