import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'register', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component:RegisterComponent },
  { path: 'profile', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent},
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
  { path: 'pageNotFound', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
