import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { PasswordMatchValidator } from '../shared/directives/passwordmatch.directive';
import { AlertComponent } from '../shared/directives/alert.component';
import { UserComponent } from '../user/user.component';
import { AlertService, UserService,AuthService } from '../shared/services/index.service';
@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    ResetpasswordComponent,
    UpdatepasswordComponent,
    PasswordMatchValidator]
    ,
    providers: [UserService,AlertService,AuthService],
})
export class UserModule { }
