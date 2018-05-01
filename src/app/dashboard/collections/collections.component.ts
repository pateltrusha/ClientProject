import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router,Params,ActivatedRoute  } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { Http,RequestOptions,Response, Headers } from '@angular/http';
import {CollectionService } from '../../shared/services/index.service';
import { ConfigService } from '../../shared/configuration/config.service';

import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu/lib/index'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-collections',
    encapsulation: ViewEncapsulation.None,
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
    closeResult: string;
    _file:any;
    template:any;
    msg:string="Hello ANgular";
    hideVal:boolean=false
   token=localStorage.getItem('auth_token');
 baseUrl: string ='http://localhost:3010/collection/new_file';
  // public uploader:FileUploader = new FileUploader({url:'https://evening-anchorage-3159.herokuapp.com/api/'});
  public hasBaseDropZoneOver:boolean = false;
param1:any;

         // headers1: Headers = new Headers({
         //   'Content-Type': 'application/json',
         //   'Authorization': this.token
         // });
        
       
  public uploader:FileUploader = new FileUploader({url:this.baseUrl})


  constructor(private modalService: BsModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private configService:ConfigService,  
    private collService:CollectionService,) {

    // this.baseUrl = configService.getApiURI();
    console.log('Called Constructor');
    this.param1=this.activatedRoute.snapshot.queryParams["id"];
    console.log(this.param1);
  }

  ngOnInit() {
   
}

items:any;
uploadFile(){

    const file_data={
       
       "u_cID":this.param1
    }
debugger
     this.collService.uploadFile(this.items,file_data)
     .subscribe(
                           data => {
                           console.log(data);
                             
                                 },
                         error => {
                          
                           
                        });
}
 fileChangeEvent(fileInput: any){
   debugger
        this.items = fileInput.target.files; 
        console.log(this.items);   
     }






  showText(){
  
  this.hideVal=true;
}
   
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
    }
  
 openfileDialog() {
   debugger
   this._file.click();
  }

  modalRef: BsModalRef;
 openModal(t) {
   
    this.modalRef = this.modalService.show(t);
  }
  
   

  
   today:number=Date.now();


}
