import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/index.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   _email: string;
   _password: string;
   _rememberMe:boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastrService: ToastrService) { }
    //@ViewChild('eid') private lb;
    ngOnInit() {
      
      if(localStorage.getItem('user_email')!=null)
      {
        //this.lb.getNativeElement().className = 'center-align login-label active';
          this._email=localStorage.getItem('user_email');
       }

        this.authService.logout();

        // get return url from route parameters or default to '/'
       ;
     }
    
    login() {
     debugger
       if(this._rememberMe==true){
          localStorage.setItem('user_email', this._email);
       }
       
       else{
            localStorage.removeItem('user_email');
           }

        const user = {
          "email": this._email,
          "password": this._password
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
                         this.toastrService.error('Invalid credential!',);
                });
           }
     
}
