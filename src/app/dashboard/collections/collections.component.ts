import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {IShContextMenuItem, IShContextOptions, BeforeMenuEvent} from 'ng2-right-click-menu';
@Component({
  selector: 'app-collections',
    encapsulation: ViewEncapsulation.None,
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

 title = 'Right Click Me';
  items: IShContextMenuItem[];
  dataCtxOne: any;
  options: IShContextOptions;

  constructor() {
    this.dataCtxOne = {
      One: 'One'
    };

    this.items = [
      {
        label: 'Preview',
        onClick: this.clickEvent
      }, 
       {
        label: 'Rename',
        onClick: this.clickEvent
      } ,
      {
        label: 'Remove',
        onClick: this.clickEvent
      } ,
      {
        divider: true
      },
      {
        label: 'Upload file',
        onClick: this.uploadFile
      },
     
    ];
console.log(this.items);
   

    this.options = {
      rtl: true,
      theme: 'dark'
    };
  }

  onBefore = (event: BeforeMenuEvent) => {
    console.log(event);
    event.open([event.items[0]]);
    

  };

  clickEvent = ($event: any) => {
    console.log('clicked ', $event);
  }

  uploadFile=()=>{
    console.log("file uploaded");
  }

  ngOnInit() {
  }
 

   today:number=Date.now();
  public uploader:FileUploader = new FileUploader({url:'https://evening-anchorage-3159.herokuapp.com/api/'});


 public hasBaseDropZoneOver:boolean = false;
      
        
 public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

}
