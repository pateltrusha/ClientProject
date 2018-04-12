import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/index.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {
  _name:string;
  _city: string;
  _state: string;
  _country:string;
  _postcode:number;
  _company_type:string;     
  _company_role:string;

  constructor(private router: Router,
        private userService: UserService,
        private toastrService: ToastrService) { }

  updateProfile(){
  	const updateUser = {
     "user" :{
          "email":"",
          "password":"",
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


   this.userService.createUser(updateUser)
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
   
  