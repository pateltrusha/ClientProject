import { Component, OnInit } from '@angular/core';
import {CollectionService } from '../../shared/services/index.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor( private collService:CollectionService, private router: Router) { 
  	this.GetFolder()}

  ngOnInit() {
  }

  collections:any;
    //get all collections
  GetFolder(){
  	debugger
      this.collService.getFolders()
         .subscribe(
           data=>{
             this.collections=data.collections;
             console.log(data)}
           )
    }  

            


}
