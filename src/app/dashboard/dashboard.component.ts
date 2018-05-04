import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AuthService,CollectionService,FolderService } from '../shared/services/index.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
_route:any=[];
 
  constructor(private authService: AuthService,
              private modalService: BsModalService,
              private collService:CollectionService,
              private  folderService:FolderService,
              private router: Router,
              private toastrService: ToastrService,
              private location: Location) {

    this.router = router;
            console.log(this.router.url); //  /routename 
    }
   collections:any;
  ngOnInit() {
  }


  //create new folder
  createFolder(f_name){
debugger
    const file_name={
      "name":f_name
    }
    this.modalRef.hide();
      this.folderService.createFolder(file_name)
      .subscribe(
                          data => {
                           console.log(data);
                               this.router.navigated = false;
                               this.router.navigate([this.router.url]);
                            //this.pageRefresh();
                           
                            this.toastrService.success('Folder created Successfully!');   
                                 },
                          error => {
                             this.toastrService.error('Error while updating!');
                           
                          });

  }

//  pageRefresh() {
//    debugger
//    location.reload();
// }
    ///modal pop up
   modalRef: BsModalRef;
   createModal(t) {
   
    this.modalRef = this.modalService.show(t);
  }

  logout(){
       this.authService.logout();
   }
  
}
