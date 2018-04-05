import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
//import { DashboardModule } from './dashboard/dashboard.module';

export const routes: Routes = 
 [{ path: '', 
    component: UserComponent,
    loadChildren: 'app/user/user.module#UserModule'}, 

  { path: 'dashboard', 
    component: DashboardComponent,canActivate: [AuthGuard] ,
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },

  { path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }

 ]


   