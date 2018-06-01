import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeManagementComponent } from './components/recipe-management/recipe-management.component';
import { ApplicationComponent } from './components/application-management/application/application.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { EditApplicationComponent } from './components/application-management/edit-application/edit-application.component';
import { AuthGuard } from './components/login/Auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipe', component: RecipeManagementComponent },
  { path: 'apply', component: ApplicationComponent , canActivate: [AuthGuard] },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'edit', component: EditApplicationComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
