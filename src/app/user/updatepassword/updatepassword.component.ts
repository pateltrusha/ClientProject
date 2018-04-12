import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/index.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})


export class UpdatepasswordComponent implements OnInit {
   _email: string;
   _password: string;

  constructor(  

        private router: Router,
        private authService: AuthService,
         private toastrService: ToastrService) { }

  ngOnInit() {
  }

  update_pass(){

  	  const user = {
          "email": this._email,
          "password": this._password
        }
        debugger
  	this.authService.updatePassword(user)
             .subscribe(
                data => {
                 
                 this.toastrService.success('Password updated !!');
                     console.log("data: ", data);
                    this.router.navigate(['/login']);
                },
                  error => {
                        this.toastrService.error('Invalid Email!');
                            });
           }
  }


