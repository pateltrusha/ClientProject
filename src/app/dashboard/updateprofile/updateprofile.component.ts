import { Component, OnInit,Input  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/index.service';
import { ToastrService } from 'ngx-toastr';
import{user,address,profile,users} from '../../shared/models/user';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {

debugger;
  @Input() name: string;
  @Input() institution:string;
  @Input() occupation:string;
  @Input() phone:string;
  @Input() address:string;
  @Input() city: string;
  @Input() state:string;
  @Input() country:string;
  @Input() postcode:string;
  @Input() company_type: string;
  @Input() company_role: string;
  @Input() desc_of_company:string;
  @Input()  webpage:string;

  countries = 
   [
     {
      "country": "India",
      "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]
    },
    {
      "country": "United States",
      "states": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }];
    state1=this.countries[1].states;
     
        onSelectCountry(c){
            
            
              for (var i = 0; i < this.countries.length; i++)
    {
      if (this.countries[i].country == c) {
      
        this.state1= this.countries[i].states;
      }
    
    }
            }
   token=localStorage.getItem('auth_token');
   // user: user = {
   //        email:'',
   //        password:'',
   //        name:'',
   //        token:this.token
   //      };

   // add:address = {
   //        name:this.name,
   //        address:'',
   //        city:'',
   //        state:'',
   //        country:'',
   //        postcode:'',
   //        phone:'',
   //        institution:this.institution,
   //        occuption:this.occupation
   //      };

   //  profile:profile={
   //    name: '',  
   //    company_type: '',
   //    company_role: '',
   //    desc_of_company:'',
   //    webpage:''
   //  }    


users={
  "name":this.name,
  "token":this.token,
  "address":{
          "name":this.name,
          "institution":this.institution,
          "occupation":this.occupation,
          "phone":this.phone,
          "address":this.address,
          "city":this.city,
          "state":this.state,
          "country":this.country,
          "postcode":this.postcode
        },
    "profile":{
           "name":this.name,
            "company_type":this.company_type,
            "company_role":this.company_role,
            "desc_of_company":this.desc_of_company,
            "webpage":this.webpage
    }
  
  }

  constructor(private router: Router,
        private userService: UserService,
        private toastrService: ToastrService) {

        this.getProfile();
    console.log(this.users)
      }



  getProfile(){
    this.userService.getUser()
            .subscribe(
                data => {
              
                    this.users=data;
                    console.log("DATA",this.users)
;                    
                               
                },
                error => {
                   this.toastrService.error('Error while updating!');
                 
     
               });
  }

  updateProfile(f: NgForm){

console.log(f.value);
    const updateUser = {
     "user" :{
          "token":this.token
          
     },
     "address":{
        "name": f.value.txt_name,
        "adddress":f.value.txt_address,
        "city":f.value.txt_city,
        "state":f.value.txt_state,
        "country":f.value.txt_country,
        "postcode":f.value.txt_postcode,
        "phone":f.value.txt_phone,
        "institution":f.value.txt_institution,
        "occupation":f.value.txt_occupation

      },
      "profile":{
         "name": f.value.txt_name1,
         "company_type":f.value.txt_type,
         "company_role":f.value.txt_role,
         "desc_of_company" : f.value.txt_description,
         "webpage": f.value.txt_webpage
      }
  }

debugger
   this.userService.updateUser(updateUser)
            .subscribe(
                data => {
               
                    this.toastrService.success('Successfully updated !');
                         this.router.navigate(['/dashboard']);
             
                },
                error => {
                   this.toastrService.error('Error while updating!');
                 
                });
}
}
   
  