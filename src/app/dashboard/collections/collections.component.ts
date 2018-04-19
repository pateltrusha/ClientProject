import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
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

  public uploader:FileUploader = new FileUploader({url:'https://evening-anchorage-3159.herokuapp.com/api/'});
  public hasBaseDropZoneOver:boolean = false;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
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
