import { Component, OnInit,ViewEncapsulation,Input,ViewChild } from '@angular/core';
import { Router,Params,ActivatedRoute  } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Http,RequestOptions,Response, Headers } from '@angular/http';
import {CollectionService } from '../../shared/services/index.service';
import { ConfigService } from '../../shared/configuration/config.service';

import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu/lib/index'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService ,ToastContainerDirective} from 'ngx-toastr';

@Component({
    selector: 'app-collections',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
    token:string;
    uploadedFiles:any=[];
    _files:any=[];
    _file:any;
    c_id:any;
    fileData:any;
    cur_name:string;
    new_name:string
    baseUrl: string ='http://localhost:3010/collection/new_file';
    public hasBaseDropZoneOver:boolean = false;
    
     items:any=[];
     _items = new Array();
     _f:any;
     
    
  public uploader:FileUploader = new FileUploader({url:this.baseUrl})
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  constructor(private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService:ConfigService,  
    private collService:CollectionService,
    private toastrService: ToastrService) {

    // this.baseUrl = configService.getApiURI();
   this.token=localStorage.getItem('auth_token');
   this.c_id=this.activatedRoute.snapshot.queryParams["id"];
   // this.c_id=this.activatedRoute.snapshot.paramMap.get('id');
   
   }

  ngOnInit() { 
      this.toastrService.overlayContainer = this.toastContainer;
      this.getFiles();
      }
//items: Array<File> = [];

  //choose file from  dialouge 
 fileSelect(fileInput: any){
        this._files.push(fileInput.target.files[0]); 
        console.log(this._files);  
     }

// file dropping
 dropped(fileInput: any){
     this._files.push(fileInput[0]);  
}
  //listing all files
  getFiles()
  {
    const file_data={
       "u_cID":this.c_id
     }
     //service call to get all files
     this.collService.getAllfiles(file_data)
     .subscribe(
                 data => {
                      console.log(data);
                      this.uploadedFiles=data;
                        },
                 error => { 
                 this.toastrService.error("error while fetching files"); 
              });
   } 
     
     //upload new files
   uploadFile(i)
   {
     debugger
    const fileEvent: FileList = this._files;
    const file: File = fileEvent[0];
    console.log(file);

    let formData: FormData = new FormData();

    // let payload = {
    //   file: file,
    //   u_cID:this.param1
    // }
    // console.log(payload)
   
    formData.append('u_cID', this.c_id);
    formData.append('file', file);
     //service call to upload file
     this.collService.uploadFile(formData)
     .subscribe(
                   data => {
                        console.log(data);
                        this.toastrService.success('File Uploaded Successfully !');
                        this.getFiles();
                       
                        },
                    error => {
                          this.toastrService.error("Error while uploading file");
                        });
      this.remove(i);
           }


  //remove from uploading list
  remove(i){  

   this._files.splice(i, 1);  }

  
  public fileOverBase(e:any):void {
  
    this.hasBaseDropZoneOver = e;
  
    }

  //will open file dialog when click on upload button
 openfileDialog() {
   debugger
   this._file.click();
  }

  //open modal pop up for preview
   modalRefPrev: BsModalRef;
   previewModal(t,data) {
          this.modalRefPrev = this.modalService.show(t,data);
    }
 
   //open modal popup for rename file
    modalRefRename: BsModalRef;
    renameModal(t,file) {

          this.modalRefRename = this.modalService.show(t);
          this.cur_name=file.name+file.extension
          this.fileData=file;
    // this.modalService.onHide.subscribe((reason: string) =>{
    //       this.setMsg=this.msg;
    // });
     }
  // for fetching new value
   changeEvent(newValue) {
      this.new_name=newValue
     console.log(newValue, this.cur_name);
     }

 //rename file
  renameFile(file){
    debugger
     const fileData={
        "cur_name":this.cur_name,
        "new_name":this.new_name,
        "u_cID":file.collection_id,
        "u_dID":file.id
        }

 this.modalRefRename.hide();
        this.collService.renameFile(fileData)
             .subscribe(
                   data => {
                        console.log(data);
                          this.toastrService.success('File Renamed Successfully !');
                           this.getFiles();
                        },
                    error => {
                      this.toastrService.error("Error while renaming file");
                        });
      }

 
  //open modal popup for remove file
   modalRefRemove: BsModalRef;
  removeModal(t,file){
     this.modalRefRemove = this.modalService.show(t);

     this.fileData=file;
//     this.modalService.onHide.subscribe(
//       this.r_file=file
// )
  }

  //remove file
     removeFile(file){
       debugger
       this.modalRefRemove.hide();
        const fileData={
             "u_cID":file.collection_id,
             "u_dID":file.id
           }  

    this.collService.removeFile(fileData)
          .subscribe(
                   data => {
                        console.log(data);
                          this.toastrService.success('File Deleted Successfully !');
                           this.getFiles();
                        },
                    error => {
                        this.toastrService.error("Error while removing file");
                        });
 
     }

  
}
