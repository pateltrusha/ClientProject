import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthService } from '../shared/services/index.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})


export class UpdatepasswordComponent implements OnInit {
   email1: string;
   password1: string;

  constructor(  

        private router: Router,
        private authService: AuthService,
        private alertService: AlertService) { }

  ngOnInit() {
  }

  update_pass(){

  	  const user = {
          "email": this.email1,
          "password": this.password1
        }
        debugger
  	this.authService.updatePassword(user)
             .subscribe(
                data => {
                 this.alertService.success("Password updated !!",true);
                     console.log("data: ", data);
                    this.router.navigate(['/login']);
                },
                  error => {
                       this.alertService.error("Invalid Email",true);
                });
           }
  }


