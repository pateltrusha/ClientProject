import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';

@Injectable()
export class UserService {

   baseUrl: string ='';

    constructor(private http: Http, private router: Router,
                private configService: ConfigService )
     { 
     this.baseUrl = configService.getApiURI();
     }  
    createUser(user:User){
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(user);
    return this.http.post(this.baseUrl + "/anton_user", body, options);
  }
}
