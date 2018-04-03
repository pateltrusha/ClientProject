import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';
import{user} from '../models/user';


@Injectable()
export class AuthService {
 authToken:any;
 baseUrl: string = '';
 private loggedIn = false;


 constructor(private http: Http, private router: Router,
             private configService: ConfigService) { 

   this.baseUrl = configService.getApiURI();}

  login(user) {

    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post(this.baseUrl + "/users/validateuser", body, options)
         .map(res =>res.json())
         .catch(err => this.handleError(err));
          
    }

    private handleError (error: Response) {
      console.log(error);
      console.log("service error" ,error.json().error)
      return Observable.throw(error.json().error);
    }



   storeUserData(token) {
    localStorage.setItem('auth_token', token);
  }


	resetPassword(email:string):any{
		debugger;
		// return this.http.get('http://localhost:52008/api/anton_user/'+ email)
  //        .map(res => res.json())
  //        .do(data => console.log(JSON.stringify(data)))
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');

    return this.http
      .post(
     this.baseUrl + '/login',
      JSON.stringify({ email }),{ headers }
      )
      .map(res => res.json())
        .do(data => console.log(JSON.stringify(data)))

  }

     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('auth_token');
         this.loggedIn = false;
        this.router.navigate(['/login']);
    }


    isLoggedIn() {
       return this.loggedIn;
      }  



}
