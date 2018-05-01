import { Component, OnInit,ViewEncapsulation,ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
   encapsulation: ViewEncapsulation.None,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
