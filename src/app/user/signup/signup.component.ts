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
          
             

 constructor(
        private router: Router,
        private userService: UserService,
        private toastrService: ToastrService) {

 }
      ngOnInit() {
  }

  

    register() {
 const newUser = {
     "user" :{
          "email":this._email,
          "password": this._password,
          "name":this._name
     }
   
  }
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
