import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { PasswordMatchValidator } from '../shared/directives/passwordmatch.directive';
import { UserComponent } from '../user/user.component';

export const userRoutes: Routes =

                // [{ path: '', component: LoginComponent },
                // { path: 'login', component: LoginComponent },
                // { path: 'signup', component: SignupComponent },
                // { path: 'resetpassword', component: ResetpasswordComponent },
                // { path: 'updatepassword', component: UpdatepasswordComponent }]


 [
	{ path: 'user',component: UserComponent,
        children: [ 	
       			{ path: '', component: LoginComponent },
                { path: 'login', component: LoginComponent },
    			{ path: 'signup', component: SignupComponent },
    			{ path: 'resetpassword', component: ResetpasswordComponent },
    			{ path: 'updatepassword', component: UpdatepasswordComponent }
	      	]
	   }];
   
    // otherwise redirect to home
    //{ path: '**', redirectTo: 'dashboard' }]