import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
//import { DashboardModule } from './dashboard/dashboard.module';

export const routes: Routes = 
 [{ path: '', component: DashboardComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'resetpassword', component: ResetpasswordComponent },
    { path: 'updatepassword', component: UpdatepasswordComponent },
    { path: 'dashboard', component: DashboardComponent,
       loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
       { path: '**', redirectTo: 'login' }]

    // otherwise redirect to home
    // { path: '**', redirectTo: 'dashboard' }]

   