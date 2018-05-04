import { Component, OnInit,ViewChild } from '@angular/core';
import {CollectionService,FolderService } from '../../shared/services/index.service';
import { Router } from '@angular/router';
import{ CollectionsComponent} from '../collections/collections.component';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu/lib/index'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService,ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})

export class FoldersComponent implements OnInit {

  constructor( private collService:CollectionService,
               private  folderService:FolderService,
               private router: Router,
               private toastrService: ToastrService,
               private modalService: BsModalService) { 
  	this.getFolders()}
 @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  ngOnInit() {
        this.toastrService.overlayContainer = this.toastContainer;
  }

  folders:any;
  cur_name:string;
  new_name:string;
  _folder:any;
    //get all collections
  getFolders(){
  	debugger
      this.folderService.getFolders()
         .subscribe(
           data=>{
                   this.folders=data.collections;
                   console.log(data)},
            error => { 
                 this.toastrService.error("error while fetching folders"); 
                      }
           );
    }  

 //open modal popup for rename file
    modalRefRename: BsModalRef;
    renameModal(t,folder) {
          this.modalRefRename = this.modalService.show(t);
          this.cur_name=folder.name
          this._folder=folder
    // this.modalService.onHide.subscribe((reason: string) =>{
    //       this.setMsg=this.msg;
    // });
     }

  changeEvent(newValue) {
      this.new_name=newValue
       console.log(newValue, this.cur_name);
     }

    renameFolder(folder){
     const folderData={
          "new_name":this.new_name,
          "u_cID":folder.id
          }

      this.modalRefRename.hide();
      this.folderService.renameFolder(folderData)
         .subscribe(
           data=>{
                   this.toastrService.success("folder renamed successfully!!");
                   this.getFolders()},
            error => { 
                 this.toastrService.error("error while fetching folders"); 
                        }
           );
    }

//open modal popup for remove file
   modalRefRemove: BsModalRef;
  removeModal(t,folder){
     this.modalRefRemove = this.modalService.show(t);
     this._folder=folder;
  }
    removeFolder(folder){
      const folderData={
          "u_cID":folder.id
          }

      this.modalRefRemove.hide();
      this.folderService.removeFolder(folderData)
         .subscribe(
           data=>{
                   this.toastrService.success("folder removed successfully!!");
                   this.getFolders()},
            error => { 
                 this.toastrService.error("error while fetching folders"); 
                        }
           );

    }

            


}
