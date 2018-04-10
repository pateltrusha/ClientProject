import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
//import { DashboardModule } from './dashboard/dashboard.module';

export const routes: Routes = 
 [{ path: 'user', 
    component: UserComponent,
    loadChildren: 'app/user/user.module#UserModule'}, 

  { path: 'dashboard', 
    component: DashboardComponent,
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },

  { path: '**',
    redirectTo: '/user',
    pathMatch: 'full'
  }

 ]

// ,canActivate: [AuthGuard]
   