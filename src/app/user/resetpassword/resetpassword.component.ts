import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../shared/services/index.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    moduleId: module.id,
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
	_email:any;
  
  constructor(private router: Router,
              private authService: AuthService,
              private toastrService: ToastrService) { }

  ngOnInit() {
  }

  reset_pass(){
    const user = {
          "email": this._email,
        }
    debugger

  	this.authService.resetPassword(user )
            .subscribe(
            	 data => {
                	debugger
                       this.router.navigate(['user/updatepassword']);             
                         }   
                ,
                error => {
                  this.toastrService.error('Invalid credentials');          
                });
               
        }

  }
    

