import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
@Injectable()
export class FolderService {
    baseUrl: string ='';
    token=localStorage.getItem('auth_token');

  constructor(private http: Http,
              private router: Router,
              private configService: ConfigService) {

              this.baseUrl = configService.getApiURI();
               }

       //get all folders
    getFolders(){   	
    		let headers: Headers = new Headers();
   			headers.append('Content-Type', 'application/json');
    		headers.append('Authorization', this.token);
  			let options = new RequestOptions({ headers: headers });

			    return this.http.get(this.baseUrl + "/collection",options)
			         .map(res =>res.json())
			         .catch(err => this.handleError(err));
    }
  //error handling
     private handleError (error: Response) {
       
     	console.log(error.json());
      return Observable.throw(error.json().error);
    }   

       //create new folder
     createFolder(folderData){
        let body = JSON.stringify(folderData);
        let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
         
          return this.http.post(this.baseUrl + "/collection/new_folder", body, options)
               .map(res =>res.json() )
               .catch(err => this.handleError(err));
     }


    //rename 
    renameFolder(folderData){
    
      let body = JSON.stringify(folderData);
      let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);
      let options = new RequestOptions({ headers: headers });
          
          return this.http.post(this.baseUrl + "/collection/rename_folder", body, options)
               .map(res =>res.json() )
               .catch(err => this.handleError(err));
    }
    
    //remove folder
     removeFolder(folderData){
      let body = JSON.stringify(folderData);
      let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);
      let options = new RequestOptions({ headers: headers });
          console.log(folderData);
          return this.http.post(this.baseUrl + "/collection/remove_folder", body, options)
               .map(res =>res.json() )
               .catch(err => this.handleError(err));
    }      

}
