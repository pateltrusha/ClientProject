import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/index.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
 
  _email: string;
  _password: string;
  _name: string;
  _city: string;
  _state: string;
  _country:string;
  _postcode:number;
  _company_type:string;     
  _company_role:string;        
              
 


 constructor(
        private router: Router,
        private userService: UserService,
        private toastrService: ToastrService) {

 }
      ngOnInit() {
  }

  

    register() {
debugger
 const newUser = {
     "user" :{
          "email":this._email,
          "password": this._password,
          "name":this._name
     },
     "address":{
        "name": this._name,
        "city":this._city,
        "state":this._state,
        "country":this._country,
        "postcode":this._postcode
      },
      "profile":{
         "name": this._name,
         "company_type":this._company_type,
         "company_role":this._company_role
      }
   
  }
    debugger
        console.log(newUser);
        console.log(newUser.user.email)

        this.userService.createUser(newUser)
            .subscribe(
                data => {
               
                    this.toastrService.success('Successfully registered !');
                    this.router.navigate(['/login']);
                },
                error => {
                   this.toastrService.error('email is already exists!');
                 
                });
    }

}
