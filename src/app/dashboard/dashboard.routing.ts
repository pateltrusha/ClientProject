import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CollectionsComponent } from './collections/collections.component';
import { ResultsComponent } from './results/results.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { AuthGuard } from '../auth.guard';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
export const dashroutes: Routes = [
	{ path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard],
        children: [ 
	       { path: 'collections',component: CollectionsComponent},
	       { path: 'analysis', component: AnalysisComponent},
	       { path: 'result', component: ResultsComponent },
	       { path:'updateprofile', component: UpdateprofileComponent }
	       ]
	   }];
   
    // otherwise redirect to home
    //{ path: '**', redirectTo: 'dashboard' }]