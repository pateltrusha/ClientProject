import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{user} from '../../shared/models/user';
import { AuthService } from '../../shared/services/index.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
@Component({
   moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: user = {
        email:'',
        password:'',
        name:'',
        token:''
  };
  _rememberMe:boolean;


@ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastrService: ToastrService) { }
  
    ngOnInit() {

      this.toastrService.overlayContainer = this.toastContainer;

      if(localStorage.getItem('user_email')!=null)
      {
          // store user email if chechbox is checked
          this.user.email=localStorage.getItem('user_email');
       }

        this.authService.logout();

        // get return url from route parameters or default to '/'   
     }
    
    login() {
        
       if(this._rememberMe==true){
         //set value in localstorage
          localStorage.setItem('user_email', this.user.email);
        }
       
       else{
            localStorage.removeItem('user_email');
           }

       //call service
        this.authService.login(this.user)
             .subscribe(
                data => {
                  if(data){
                    //store auth token
                    this.authService.storeUserData(data);
                    this.router.navigate(['/dashboard']);
                  } 
                },
                  error => {
                   
                        this.toastrService.error('Invalid credential!',);
                });
           }
     
}
