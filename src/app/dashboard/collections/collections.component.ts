import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public uploader:FileUploader = new FileUploader({url:'https://evening-anchorage-3159.herokuapp.com/api/'});
 public hasBaseDropZoneOver:boolean = false;
      
        
 public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

}
