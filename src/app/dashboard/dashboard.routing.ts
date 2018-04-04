import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CollectionsComponent } from './collections/collections.component';
import { ResultsComponent } from './results/results.component';
import { AnalysisComponent } from './analysis/analysis.component';

export const dashroutes: Routes = [
	{ path: 'dashboard',component: DashboardComponent,
        children: [ 
	       { path: 'collections',component: CollectionsComponent},
	       { path: 'analysis', component: AnalysisComponent},
	       { path: 'result', component: ResultsComponent }
	       ]
	   }];
   
    // otherwise redirect to home
    //{ path: '**', redirectTo: 'dashboard' }]