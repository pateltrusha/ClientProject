import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = 
	[{ path: '', component: LoginComponent,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: HomeComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }]

   