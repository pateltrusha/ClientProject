import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../services/index.service';
import { User } from '../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

     currentUser: any;
 

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        debugger
        console.log(this.currentUser);
    
    }
  ngOnInit() {
             }
  	logout(){
  		 this.userService.logout();
  	}
    
}
