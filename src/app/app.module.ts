import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlertComponent } from './shared/directives/alert.component';
import { AlertService, UserService,AuthService } from './shared/services/index.service';
import { AuthGuard } from './auth.guard';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { PasswordMatchValidator } from './shared/directives/passwordmatch.directive';
import { ConfigService } from './shared/configuration/config.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AlertComponent,
    ResetpasswordComponent,
    UpdatepasswordComponent,
    PasswordMatchValidator,
    UserComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes),DashboardModule
  ],
  providers: [AuthGuard,UserService,AlertService,AuthService,ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
