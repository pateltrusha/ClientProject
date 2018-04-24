import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/index.service';
import { ToastrService } from 'ngx-toastr';
import{user,address,profile,users} from '../../shared/models/user';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {


  getCountry(){
    alert("hit....");
  }
   token=localStorage.getItem('auth_token');
   user: user = {
          email:'',
          password:'',
          name:'',
          token:this.token
        };

   add:address = {
          name:'',
          address:'',
          city:'',
          state:'',
          country:'',
          postcode:'',
          phone:'',
          institution:'',
          occuption:''
        };

    profile:profile={
      name: '',  
      company_type: '',
      company_role: '',
      desc_of_company:'',
      webpage:''
    }    


 users:users={
     user:this.user,
     address:this.add,
     profile:this.profile
 }



  constructor(private router: Router,
        private userService: UserService,
        private toastrService: ToastrService) {

        this.getProfile();
      }



  getProfile(){
    this.userService.getUser()
            .subscribe(
                data => {
                    this.users=data;
                    console.log("my user", this.users);
                               
                },
                error => {
                   this.toastrService.error('Error while updating!');
                 
     
               });
  }

  updateProfile(){

    const updateUser = {
     "user":this.user,
     "address":this.add,
     "profile":this.profile
  }

debugger
   this.userService.updateUser(updateUser)
            .subscribe(
                data => {
               
                    this.toastrService.success('Successfully updated !');
                         this.router.navigate(['/dashboard']);
             
                },
                error => {
                   this.toastrService.error('Error while updating!');
                 
                });
}
}
   
  