import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContextMenuModule } from 'ngx-contextmenu/lib/index';
import { ToastrModule,ToastContainerModule } from 'ngx-toastr';
//import { ContextMenuModule } from '../lib/index';
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
    ToastrModule.forRoot({ positionClass: 'toast-top-left',preventDuplicates: true }),
    ToastContainerModule,
    ModalModule.forRoot(),
    ContextMenuModule.forRoot({
      autoFocus: true,
      // useBootstrap4: true,
    }),
    DashboardModule,
    UserModule
   
  ],
  providers: [AuthGuard,ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
