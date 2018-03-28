import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/index.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
	email:string;
model:any={};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  reset_pass(){
  	this.authService.resetPassword(this.model.email )
            .subscribe(
            	 data => {
                	if (data) {
                		this.email=data;
                       this.router.navigate(['/updatepassword']);             
                         }   
                })
               
        }

  }
    

