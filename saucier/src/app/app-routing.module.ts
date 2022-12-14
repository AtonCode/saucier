import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  
  { path: 'profile', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent ,canActivate: [AuthGuard] },

  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},

  { path: 'register', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component:RegisterComponent },
  
  { path: '**', redirectTo: 'pageNotFound', pathMatch: 'full' },
  { path: 'pageNotFound', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
