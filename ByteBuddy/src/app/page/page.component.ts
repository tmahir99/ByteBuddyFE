import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div className="" class="page-container">
    <app-custom-header></app-custom-header>
      <main class="page-content bg-VividSkyBlue">
        <div class="bg-Wenge w-3/5">
          <ng-content></ng-content>
        </div>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./page.component.css']
})
export class PageComponent {}
