import {
    CUSTOM_ELEMENTS_SCHEMA,
    NgModule,
    NO_ERRORS_SCHEMA,
} from '@angular/core'
import { MarkdownModule } from 'ngx-markdown'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {
    HTTP_INTERCEPTORS,
    provideHttpClient,
    withInterceptorsFromDi,
    HttpClient,
    HttpClientModule,
} from '@angular/common/http'
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify'
import {
    TuiRootModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiAlertModule,
    TUI_SANITIZER,
} from '@taiga-ui/core'
import { TuiInputModule } from '@taiga-ui/kit'
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { AuthService } from './auth.service'
import { AppRoutingModule } from './app-routing.module'
import { MakeRoleComponent } from './make-role/make-role.component'
import { TuiTableModule } from '@taiga-ui/addon-table'
import { TuiTagModule } from '@taiga-ui/kit'

import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { InputTextModule } from 'primeng/inputtext'

import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HttpErrorInterceptor } from './http-error.interceptor'
import { FooterComponent } from './footer/footer.component'
import { ContactComponent } from './contact/contact.component'
import { ManageUsersComponent } from './manage-users/manage-users.component'
import { PageComponent } from './page/page.component'
import { CodeSnippetComponent } from './code-snippet/code-snippet.component'
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs'
import { CreateSnippetComponent } from './create-snippet/create-snippet.component'
import { CommentComponent } from './comment/comment.component'
import { ProfileComponent } from './profile/profile.component'
import { PagesComponent } from './pages/pages.component'
import { PageCardComponent } from './page-card/page-card.component'
import { CreateEditPageComponent } from './create-edit-page/create-edit-page.component'
import { PageDetailComponent } from './page-detail/page-detail.component'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        HeaderComponent,
        MakeRoleComponent,
        FooterComponent,
        ContactComponent,
        ManageUsersComponent,
        PageComponent,
        CodeSnippetComponent,
        CreateSnippetComponent,
        CommentComponent,
        ProfileComponent,
        PagesComponent,
        PageCardComponent,
        CreateEditPageComponent,
        PageDetailComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiInputModule,
        TuiTableModule,
        TuiTagModule,
        TuiButtonModule,
        MatDialogModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        MatSnackBarModule,
        MarkdownModule.forRoot({ loader: HttpClient }),
        HighlightModule,
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbers: true,
            },
        },
        AuthService,
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ],
    bootstrap: [AppComponent],
    exports: [CodeSnippetComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
