import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/index.service';

@Component({
  selector: 'app-dashboard',
  providers:[AuthService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  constructor(  private authService: AuthService,) { }

  ngOnInit() {
  }

   logout(){
   	debugger;
   	  this.authService.logout();
   }
}
