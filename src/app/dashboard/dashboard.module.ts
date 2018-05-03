import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { dashroutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { CollectionsComponent } from './collections/collections.component';
import { ResultsComponent } from './results/results.component';
import { AnalysisComponent } from './analysis/analysis.component';
import {ShContextMenuModule} from 'ng2-right-click-menu';
import { FileSelectDirective, FileDropDirective,FileUploader } from 'ng2-file-upload';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { CollectionService,FolderService } from '../shared/services/index.service';
import { ContextMenuModule } from 'ngx-contextmenu/lib/index';
import { FoldersComponent } from './folders/folders.component';

//import { ContextMenuModule } from '../../lib/index';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(dashroutes),
    ShContextMenuModule,FormsModule,ContextMenuModule
  ],
  declarations: [
    FileSelectDirective,
    FileDropDirective,
    DashboardComponent,
    CollectionsComponent, 
    ResultsComponent, AnalysisComponent, UpdateprofileComponent, FoldersComponent],
    providers:[CollectionService,FolderService]

})
export class DashboardModule { }
