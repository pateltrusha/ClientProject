import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { AuthService,CollectionService } from '../shared/services/index.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-dashboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  constructor(private authService: AuthService,
              private modalService: BsModalService,
              private collService:CollectionService,
              private router: Router,
              private toastrService: ToastrService) {
             
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
      this.collService.createFolder(file_name)
      .subscribe(
                          data => {
                           console.log(data);
                                this.toastrService.success('Successfully updated !');
                                   this.router.navigate(['/dashboard']);
                                 },
                          error => {
                             this.toastrService.error('Error while updating!');
                           
                          });

  }

   
    ///modal pop up
   modalRef: BsModalRef;
   openModal(t) {
   
    this.modalRef = this.modalService.show(t);
  }

  logout(){
       this.authService.logout();
   }
  
}
