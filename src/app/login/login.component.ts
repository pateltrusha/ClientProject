import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthService } from '../shared/services/index.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model:any={};
    loading = false;
    returnUrl: string;
    error:any={};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        
        this.authService.login(this.model.email, this.model.password)

            .subscribe(

                data => {
                    if(data !=null){ 
                        debugger
                       this.router.navigate(['/home']); 
                    }
                    else{
                    this.alertService.error("Incorrect username or password",true);
                       } 
                    }
                
                );
    }
}
