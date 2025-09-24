import { Component } from '@angular/core'

@Component({
    selector: 'app-page',
    template: `
        <div class="min-h-screen flex flex-col bg-background">
            <app-custom-header></app-custom-header>
            <main class="flex-1 w-full">
                <ng-content></ng-content>
            </main>
            <app-footer></app-footer>
        </div>
    `,
    styleUrls: ['./page.component.css'],
})
export class PageComponent {}
