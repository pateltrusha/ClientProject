import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class UserService {

   baseUrl: string = 'http://localhost:52008/api';

    constructor(private http: Http, private router: Router) { }

     login(email: string, password: string) {

        return this.http.post(this.baseUrl + '/login', { email: email, password: password })
         .map(res => res.json())
            .map(res => {
                // login successful if there's a jwt token in the response
     
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(res));
                

                return res;
            });
    }

  //   login(username, password) {
  //    let headers = new Headers();
  //    headers.append('Content-Type', 'application/json');

  //   return this.http
  //     .post(
  //     this.baseUrl + '/login',
  //     JSON.stringify({ username, password }),{ headers }
  //     )
  //     .map(res => res.json())
  //     .map(res => {
  //       localStorage.setItem('currentUser', res.username);
  //       return res;
  //     });

  // }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

    createUser(user:User){
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(user);
    return this.http.post(this.baseUrl + "/anton_user", body, options);
  }
}
