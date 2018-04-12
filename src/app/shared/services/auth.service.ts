import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';
import{user} from '../models/user';


@Injectable()
export class AuthService {

    baseUrl: string = '';


    constructor(private http: Http, 
                private router: Router,
                private configService: ConfigService) { 

               this.baseUrl = configService.getApiURI();}

  login(user) {
 debugger
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.baseUrl + "/users/validateuser", body, options)
         .map(res =>res.json())
         .catch(err => this.handleError(err));
          
    }


     resetPassword(email){

       let body = JSON.stringify(email);
      let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     console.log(body);
    return this.http.post(this.baseUrl + "/users/generateActivationCode", body, options)
         .map(res =>res.json())
         .catch(err => this.handleError(err));
          
    }


    updatePassword(user){

           let body = JSON.stringify(user);
           let headers = new Headers({ 'Content-Type': 'application/json' });
           let options = new RequestOptions({ headers: headers });

    return this.http.post(this.baseUrl + "/users/resetPassword", body, options)
         .map(res =>res.json())
         .catch(err => this.handleError(err));
    }

    private handleError (error: Response) {
      console.log(error);
      return Observable.throw(error.json().error);
    }

   storeUserData(token) {
     //store token 
    localStorage.setItem('auth_token', token);
  }



     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('auth_token');
    
        this.router.navigate(['/login']);
    }
 }
