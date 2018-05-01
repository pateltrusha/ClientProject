import { Injectable } from '@angular/core';
import { Http,RequestOptions,Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../configuration/config.service';
import 'rxjs/Rx';

@Injectable()
export class CollectionService {
    baseUrl: string ='';
    token=localStorage.getItem('auth_token');

  constructor(private http: Http, private router: Router,
              private configService: ConfigService ) { 

    this.baseUrl = configService.getApiURI();
  }

   
     //get all folders
    getFolders(){
    	console.log(this.token);
    	
    		let headers: Headers = new Headers();
   			headers.append('Content-Type', 'application/json');
    		headers.append('Authorization', this.token);
  			let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl + "/collection",options)
         .map(res =>res.json())
         .do(res=>console.log("Folder COllection",res))
         .catch(err => this.handleError(err));
    }

     private handleError (error: Response) {
     	console.log(error.json());
      return Observable.throw(error.json().error);
    }

     //create new folder
     createFolder(folder){
       debugger
        let body = JSON.stringify(folder);
      let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);
      let options = new RequestOptions({ headers: headers });
         
          return this.http.post(this.baseUrl + "/collection/new_folder", body, options)
               .map(res =>res.json() )
               .catch(err => this.handleError(err));
     }


    //rename 
    renameFolder(folder){
      debugger
      let body = JSON.stringify(folder);
      let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);
      let options = new RequestOptions({ headers: headers });
          
          return this.http.post(this.baseUrl + "/collection/rename_folder", body, options)
               .map(res =>res.json() )
               .catch(err => this.handleError(err));
    }
    
    //remove folder
     removeFolder(folder){
      let body = JSON.stringify(folder);
      let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', this.token);
      let options = new RequestOptions({ headers: headers });
          console.log(folder);
          return this.http.post(this.baseUrl + "/collection/remove_folder", body, options)
               .map(res =>res.json() )
               .catch(err => this.handleError(err));
    }
     //upload files

     uploadFile(files,u_Cid){


  const formData: FormData = new FormData();
    formData.append('file', files, files.name);
    formData.append('body', JSON.stringify(u_Cid));
        let headers: Headers = new Headers();
                  headers.append('Content-Type', 'multipart/form-data');
                  headers.append('Authorization', this.token);
        let options = new RequestOptions({ headers: headers});
             
         debugger
         let body = JSON.stringify(formData);
         console.log(body);
          console.log(formData.getAll('body'));
        return this.http.post(this.baseUrl + "/collection/new_file", body, options)
                .map(res =>res.json() )
                .catch(err => this.handleError(err));
     
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
             console.log(file);
             return this.http.post(this.baseUrl + "/collection/remove_file", body, options)
                       .map(res =>res.json() )
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
