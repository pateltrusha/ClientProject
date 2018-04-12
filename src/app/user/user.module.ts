import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { userRoutes } from './user.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { PasswordMatchValidator } from '../shared/directives/passwordmatch.directive';
import { UserComponent } from '../user/user.component';
import {UserService,AuthService } from '../shared/services/index.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(userRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-top-full',
            preventDuplicates: true,
  }), 

  ],
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    UpdatepasswordComponent,
    PasswordMatchValidator,
    ]
    ,
    providers: [UserService,AuthService],
})
export class UserModule { }
