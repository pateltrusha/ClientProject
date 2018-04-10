import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../shared/services/index.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
	_email:string;
  
  constructor(private router: Router,
              private authService: AuthService,
              private toastrService: ToastrService) { }

  ngOnInit() {
  }

  reset_pass(){
    debugger
  	this.authService.resetPassword(this._email )
            .subscribe(
            	 data => {
                	if (data) {
                       this.router.navigate(['/updatepassword']);             
                         }   
                } ,
                error => {
                  this.toastrService.error('Invalid credentials');          
                });
               
        }

  }
    

