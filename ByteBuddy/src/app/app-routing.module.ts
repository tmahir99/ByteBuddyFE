import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { ManageUsersComponent } from './manage-users/manage-users.component'
import { ProfileComponent } from './profile/profile.component'
import { PagesComponent } from './pages/pages.component'
import { PageDetailComponent } from './page-detail/page-detail.component'
import { CreateEditPageComponent } from './create-edit-page/create-edit-page.component'

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'manage-users', component: ManageUsersComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'pages', component: PagesComponent },
    { path: 'pages/create', component: CreateEditPageComponent },
    { path: 'pages/edit/:id', component: CreateEditPageComponent },
    { path: 'pages/:id', component: PageDetailComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
