import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';
import { Router,Params,ActivatedRoute  } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Http,RequestOptions,Response, Headers } from '@angular/http';
import {CollectionService } from '../../shared/services/index.service';
import { ConfigService } from '../../shared/configuration/config.service';

import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu/lib/index'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-collections',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './collections.component.html',
    styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
     closeResult: string;
    _file:any;
    _files:any=[];
     template:any;
     hideVal:boolean=false
     token=localStorage.getItem('auth_token');
     baseUrl: string ='http://localhost:3010/collection/new_file';
  // public uploader:FileUploader = new FileUploader({url:'https://evening-anchorage-3159.herokuapp.com/api/'});
      public hasBaseDropZoneOver:boolean = false;
     param1:any;
   items:any=[];
     _items = new Array();
     _f:any;
     f_name:string;
  
  public uploader:FileUploader = new FileUploader({url:this.baseUrl})


  constructor(private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService:ConfigService,  
    private collService:CollectionService,
    private toastrService: ToastrService) {
    // this.baseUrl = configService.getApiURI();
    this.param1=this.activatedRoute.snapshot.queryParams["id"];
    this.getFiles();

   }

  ngOnInit() { 
  
  }
 fileChangeEvent(fileInput: any){
   debugger
        this.items=fileInput.target.files; 
        console.log(this.items);   
     }

// file dropping
 dropped(fileInput: any){
    debugger
    alert("working");
    this._f = fileInput.target.files; 
     this.items.push(this._f);
  }



  //listing all files
  getFiles(){
    const file_data={
       "u_cID":this.param1
     }

     this.collService.getAllfiles(file_data)
     .subscribe(
                 data => {
                      console.log(data);
                      this._files=data;
                        },
                 error => {  
                        });
     } 
     
     //upload new files
   uploadFile(){
     debugger
    const file_data={
       
       "u_cID":this.param1
    }
    const fileEvent: FileList = this.items;
    const file: File = fileEvent[0];
    console.log(file);

    let formData: FormData = new FormData();

    // let payload = {
    //   file: file,
    //   u_cID:this.param1
    // }
    // console.log(payload)
   
    formData.append('u_cID', this.param1);
    formData.append('file', file);
     //service call to upload file
     this.collService.uploadFile(formData)
     .subscribe(
                   data => {
                        console.log(data);
                        this.toastrService.success('File Uploaded Successfully !');
                         this.items=[];
                        this.getFiles();
                        },
                    error => {

                        });
  }

  //rename file
  renameFile(new_fname){

  }


  //remove from uploading list
  remove(i){  
    debugger
   this.items=[];
  }

  showText(){
  
  this.hideVal=true;
}
   
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
     debugger;
    this.modalRefPrev = this.modalService.show(t,data);

  }
 
   //open modal popup for rename file
    modalRefRename: BsModalRef;
  renameModal(t,file) {
     debugger;

    this.modalRefRename = this.modalService.show(t);
    this.modalService.onShow.subscribe(
      this.f_name=file.name+file.extension)
    // this.modalService.onHide.subscribe((reason: string) =>{
    //       this.setMsg=this.msg;
    // });
  }

  c_id:any;
  d_id:any
  r_file:any;
  //open modal popup for remove file
   modalRefRemove: BsModalRef;
  removeModal(t,file){
    debugger;
    console.log(file);
     this.modalRefRemove = this.modalService.show(t);
    this.modalService.onHide.subscribe(
      this.r_file=file
)
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
                         // this.getFiles();
                       // this.toastrService.success('File Deleted Successfully !');
                       
                        },
                    error => {

                        });
     
     debugger
    
     //  this.getFiles();
 
     }

  
}
