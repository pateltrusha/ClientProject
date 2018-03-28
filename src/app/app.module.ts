import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './directives/alert.component';
import { AlertService, UserService,AuthService } from './services/index.service';
import { AuthGuard } from './auth.guard';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { PasswordMatchValidator } from './directives/passwordmatch.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AlertComponent,
    ResetpasswordComponent,
    UpdatepasswordComponent,
    PasswordMatchValidator
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,UserService,AlertService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
