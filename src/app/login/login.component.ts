import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, UserService } from '../services/index.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model:any={};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.userService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        
        this.userService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                	if (data) {
                    this.router.navigate(['/home']);             
                         }   
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
