import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    contactForm!: FormGroup
    isLoading = false
    messageSent = false

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', [Validators.required, Validators.minLength(10)]],
            privacy: [false, Validators.requiredTrue],
        })
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isLoading = true

            // Simulate API call
            setTimeout(() => {
                this.isLoading = false
                this.messageSent = true
                this.contactForm.reset()

                // Hide success message after 5 seconds
                setTimeout(() => {
                    this.messageSent = false
                }, 5000)
            }, 2000)
        } else {
            this.markFormGroupTouched(this.contactForm)
        }
    }

    private markFormGroupTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched()
            if (control instanceof FormGroup) {
                this.markFormGroupTouched(control)
            }
        })
    }
}
