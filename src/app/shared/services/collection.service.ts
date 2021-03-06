import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class CollectionService {
    baseUrl: string ='';
    token=localStorage.getItem('auth_token');

  constructor(private http: Http, private router: Router,
              private configService: ConfigService ) { 

    this.baseUrl = configService.getApiURI();
  }

 
//error handling
     private handleError (error: Response) {
       debugger
       console.log(error.json());
      return Observable.throw(error.json().error);
    } 

    //get all files
    getAllfiles(c_id){
       let body = JSON.stringify(c_id);
        let headers: Headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
             return this.http.post(this.baseUrl + "/collection/get_files", body, options)
                       .map(res =>res.json() )
                       .catch(err => this.handleError(err));
    }
     //upload files
     uploadFile(payload){
        let headers: Headers = new Headers();
                  //headers.append('Content-Type', 'multipart/form-data');
                  headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers});           
         //let body = JSON.stringify(formData)
        return this.http.post(this.baseUrl + "/collection/new_file",payload, options)
                .map(res =>res.json() )
                .catch(err => this.handleError(err));
   }

    //remove files
     removeFile(file){
   
         let body = JSON.stringify(file);
        let headers: Headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
             
             return this.http.post(this.baseUrl + "/collection/remove_file",body, options)
                     .map(res=>res.json())
                     .catch(err =>this.handleError(err));
     }



     //upload multiple files
     uploadMultiFiles(files){
       let body = JSON.stringify(files);
        let headers: Headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
             console.log(files);
             return this.http.post(this.baseUrl + "/collection/new_files", body, options)
                       .map(res =>res.json())
                       .catch(err => this.handleError(err));
     }
    
     //remove multiple files
      removeMultiFiles(data){
        let body = JSON.stringify(data);
        let headers: Headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
             console.log(data);
             return this.http.post(this.baseUrl + "/collection/remove_files", body, options)
                       .map(res =>res.json() )
                       .catch(err => this.handleError(err));
      }
     //rename file
     renameFile(data){
           let body = JSON.stringify(data);
        let headers: Headers = new Headers();
                  headers.append('Content-Type', 'application/json');
                  headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers });
             console.log(data);
             return this.http.post(this.baseUrl + "/collection/rename_file", body, options)
                       .map(res =>res.json() )
                       .catch(err => this.handleError(err));
     }

}
