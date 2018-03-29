import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertService, UserService } from '../shared/services/index.service';
import { User } from '../shared/models/user';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
     model: any = {};
  ngOnInit() {
  }
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {

 }

    register() {
    	debugger
        this.loading = true;
        console.log(this.model);
        this.userService.createUser(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
