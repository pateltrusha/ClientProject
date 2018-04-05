import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../../shared/services/index.service';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
 
  email1: string;
  password1: string;
  name1: string;
  city1: string;
  company_type1:string;             
              
 


 constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {

 }
      ngOnInit() {
  }

  

    register() {

 const newUser = {
     "user" :{
          "email":this.email1,
          "password": this.password1,
          "name":this.name1
     },
     "address":{
        "name": this.name1,
        "city":this.city1,
      },
      "profile":{
         "name": this.name1,
         "company_type":this.company_type1
      }
   
  }
    debugger
        console.log(newUser);
        console.log(newUser.user.email)

        this.userService.createUser(newUser)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                  console.log(error);
                    this.alertService.error("email is already exists");
                });
    }

}
