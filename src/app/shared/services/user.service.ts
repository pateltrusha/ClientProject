import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';

@Injectable()
export class UserService {

   baseUrl: string ='';
   token=localStorage.getItem('auth_token');

    constructor(private http: Http, private router: Router,
                private configService: ConfigService )
     { 
         this.baseUrl = configService.getApiURI();
     }  

     //register new user
    createUser(user){

          let body = JSON.stringify(user);
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
    
          return this.http.post(this.baseUrl + "/users", body, options)
               .map(res =>res.json())
               .catch(err => this.handleError(err));
     }

     //get user detail
      getUser(): Observable<any>{
   
         let headers: Headers = new Headers();
         headers.append('Content-Type', 'application/json');
         headers.append('Authorization', this.token);
         let options = new RequestOptions({ headers: headers });

          return this.http.get(this.baseUrl + "/users/getUser",options)
               .map(res =>res.json())
               .catch(err => this.handleError(err));
     }

    //update user address and profile
   updateUser(user){

        let body = JSON.stringify(user);  
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
  
        return this.http.post(this.baseUrl + "/users/updateUser", body, options)
             .map(res =>res.json() )
             .catch(err => this.handleError(err));
  }
  //error handling
   private handleError (error: Response) {
     console.log(error.json());
      return Observable.throw(error.json().error);
    }
}