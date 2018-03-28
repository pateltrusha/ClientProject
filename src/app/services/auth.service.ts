import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';


@Injectable()
export class AuthService {

 baseUrl: string = '';
 constructor(private http: Http, private router: Router,
             private configService: ConfigService) { 

   this.baseUrl = configService.getApiURI();}

     login(email: string, password: string) {
   
        // return this.http.post(this.baseUrl + '/login', { email: email, password: password })
      let headers = new Headers();
     headers.append('Content-Type', 'application/json');

    return this.http
      .post(
     this.baseUrl + '/login',
      JSON.stringify({ email, password }),{ headers }
      )
         .map(res => res.json())
            .map(res => {
                    localStorage.setItem('currentUser', JSON.stringify(res));
                return res;
            });
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
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }




}
