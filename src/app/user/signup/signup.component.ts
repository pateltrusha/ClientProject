import { Router } from '@angular/router';
import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from '../../shared/services/index.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import{user} from '../../shared/models/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   
    user: user = {
          email:'',
          password:'',
          name:'',
          token:''
        };
  
  // _email: string;
  // _password: string;
  // _name: string;
       @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;             
 constructor(
        private router: Router,
        private userService: UserService,
        private toastrService: ToastrService) { }
      ngOnInit() {
       }

    //register new user
    register() {
      
       const newUser = {
           "user":this.user
         }

    //service call
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
