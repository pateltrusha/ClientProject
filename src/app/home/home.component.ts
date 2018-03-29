import { Component, OnInit } from '@angular/core';
import { AlertService, AuthService } from '../shared/services/index.service';
import { User } from'../shared//models/user';
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
        this.currentUser = JSON.parse(localStorage.getItem('auth_token'));
        debugger
        console.log(this.currentUser);
    
    }
  ngOnInit() {
             }
  	logout(){
  		 this.authService.logout();
  	}
    
}
