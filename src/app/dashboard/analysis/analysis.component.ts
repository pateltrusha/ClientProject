import { Component, OnInit } from '@angular/core';
// import { ContextMenuService, ContextMenuComponent } from '../../../lib/index'
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu/lib/index'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent  {


  closeResult: string;
  public disableBasicMenu = false;
  public items: any[] = [
    {
      name: 'John',   
    },
    {
      name: 'Joe',
    },
  ];

showText(){
  debugger
  alert("hiii show text");
  this.hideVal=true;
}
   msg:string="Hello ANgular";
   hideVal:boolean=false
  // @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  // @ViewChild('enableAndVisible') public enableAndVisible: ContextMenuComponent;
  // @ViewChild('withFunctions') public withFunctions: ContextMenuComponent;

modalRef: BsModalRef;
 openModal(template) {
   alert("hii modal");
    this.modalRef = this.modalService.show(template);
  }
  constructor(private contextMenuService: ContextMenuService,private modalService: BsModalService) { }

  // public onContextMenu($event: MouseEvent, item: any): void {
  //   debugger
  //   this.contextMenuService.show.next({ event: $event, item: item });
  //   $event.preventDefault();
  // }

  public showMessage(message: any, data?: any): void {
    debugger
    console.log(message, data);
  }

  public log(message: any): void {
    console.log(message);
  }
}
