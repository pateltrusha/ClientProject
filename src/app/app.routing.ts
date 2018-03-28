import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
export const routes: Routes = 
	[{ path: '', component: LoginComponent,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'resetpassword', component: ResetpasswordComponent },
    { path: 'updatepassword', component: UpdatepasswordComponent },
    { path: 'home', component: HomeComponent },

 
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }]

   