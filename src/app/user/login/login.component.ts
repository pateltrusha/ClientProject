import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/index.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email1: string;
   password1: string;
   rememberMe:boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastrService: ToastrService) { }

    ngOnInit() {

      if(localStorage.getItem('user_email')!=null)
       {
          this.email1=localStorage.getItem('user_email');
       }

        this.authService.logout();

        // get return url from route parameters or default to '/'
       ;
     }
    
    login() {

       if(this.rememberMe==true){
          localStorage.setItem('user_email', this.email1);
       }
       
       else{
            localStorage.removeItem('user_email');
           }

        const user = {
          "email": this.email1,
          "password": this.password1
        }
        
        this.authService.login(user)
             .subscribe(
                data => {
                  if(data){
                    this.authService.storeUserData(data);
                    console.log("data: ", data);
                    this.router.navigate(['/dashboard']);
                  }
                   
                },
                  error => {
                         this.toastrService.error('Invalid credential!');
                });
           }
     
}
