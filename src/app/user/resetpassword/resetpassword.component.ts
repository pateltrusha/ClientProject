import { Component, OnInit } from '@angular/core';
import { AuthService,AlertService} from '../../shared/services/index.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
	email:string;
  
  constructor(private router: Router,
              private authService: AuthService, 
              private alertService: AlertService) { }

  ngOnInit() {
  }

  reset_pass(){
    debugger
  	this.authService.resetPassword(this.email )
            .subscribe(
            	 data => {
                	if (data) {
                       this.router.navigate(['/updatepassword']);             
                         }   
                } ,
                error => {
                          this.alertService.error("Invalid credentials",true);
                });
               
        }

  }
    

