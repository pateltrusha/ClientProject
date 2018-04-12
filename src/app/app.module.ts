import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

import { ConfigService } from './shared/configuration/config.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  
    DashboardModule,
    UserModule
   
  ],
  providers: [AuthGuard,ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
