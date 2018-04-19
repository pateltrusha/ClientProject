import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';

@Injectable()
export class CollectionService {
    baseUrl: string ='';
  constructor(private http: Http, private router: Router,
                private configService: ConfigService ) { 

    this.baseUrl = configService.getApiURI();
  }

    renameFile(){
    	
    }

}
