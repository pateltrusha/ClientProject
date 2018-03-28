import { Component, OnInit } from '@angular/core';
import { AlertService, AuthService } from '../services/index.service';
import { User } from '../models/user';
import { ContextMenuComponent } from 'angular2-contextmenu/src/contextMenu.component';
import { ContextMenuService } from 'angular2-contextmenu/src/contextMenu.service';
@Component({
  selector: 'app-home',
  providers: [ ContextMenuService ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

     currentUser: any;
 

    constructor(private authService: AuthService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        debugger
        console.log(this.currentUser);
    
    }
  ngOnInit() {
             }
  	logout(){
  		 this.authService.logout();
  	}
    
}
