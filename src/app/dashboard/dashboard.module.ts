import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashroutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { CollectionsComponent } from './collections/collections.component';
import { ResultsComponent } from './results/results.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FileSelectDirective, FileDropDirective,FileUploader } from 'ng2-file-upload';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(dashroutes)
  ],
  declarations: [
    FileSelectDirective,
    FileDropDirective,
    DashboardComponent,
    CollectionsComponent, 
    ResultsComponent, AnalysisComponent]
})
export class DashboardModule { }
