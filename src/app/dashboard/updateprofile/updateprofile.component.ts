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
  _name:any;
  _address:string;
  _city: string;
  _state: string;
  _country:string;
  _postcode:number;
  _phone:number;
  _institution:string;
  _occupation:string;
  _type:string;     
  _role:string;
  _description:string;
  _webpage:string;

   _token=localStorage.getItem('auth_token');
  constructor(private router: Router,
        private userService: UserService,
        private toastrService: ToastrService) { }

  updateProfile(){
  	const updateUser = {
     "user" :{
          "token":this._token
          
     },
     "address":{
        "name": this._name,
        "city":this._city,
        "state":this._state,
        "country":this._country,
        "postcode":this._postcode,
        "phone":this._phone,
        "institution":this._institution,
        "occupation":this._occupation
      },
      "profile":{
         "name": this._name,
         "company_type":this._type,
         "company_role":this._role,
         "desc_of_company" : this._description,
         "webpage": this._webpage
      }
  }

debugger
   this.userService.updateUser(updateUser)
            .subscribe(
                data => {
               
                    this.toastrService.success('Successfully updated !');
                    
                },
                error => {
                   this.toastrService.error('Error while updating!');
                 
                });
}
}
   
