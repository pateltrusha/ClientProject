import { Component, OnInit } from '@angular/core';
import { AlertService, AuthService } from '../shared/services/index.service';
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
      debugger
        this.currentUser = localStorage.getItem('auth_token');
    
    }
  ngOnInit() {
             }
  	logout(){
  		 this.authService.logout();
  	}
    
}
