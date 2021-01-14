import { Component, OnInit } from '@angular/core';
import { EmpserviceService, viewleave,  } from '../empservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.css']
})
export class ViewleaveComponent implements OnInit {
  viewleave:viewleave[]=[];
  constructor(public loginservice:EmpserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('empid');
  ngOnInit(): void {
    const employeeid = {
      username: this.logininfo
    }
    this.loginservice.getleavedata(employeeid)
  .subscribe( data => {
      console.log('success', data );
      this.viewleave = data;
      console.log(localStorage.getItem('empid'));
   
  }
  );
} 
  }


