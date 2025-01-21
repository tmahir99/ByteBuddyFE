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
            const { username, password } = this.loginForm.value
            this.authService.login(username, password).subscribe(
                (response) => {
                    console.log('Login response', response)
                    this.authService.storeToken(response.message)
                    this.authService.storeUserName(response.user.firstName)
                    this.authService.storeUserSurname(response.user.lastName)
                    this.authService.storeUserUsername(response.user.userName)
                    this.authService.storeUserRoles(response.user.roles)

                    this.router.navigate(['/home'])
                },
                (error) => {
                    console.error('Login error', error)
                }
            )
        }
    }
}
