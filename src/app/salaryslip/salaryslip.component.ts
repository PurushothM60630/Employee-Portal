import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { EmpserviceService, Salary } from '../empservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-salaryslip',
  templateUrl: './salaryslip.component.html',
  styleUrls: ['./salaryslip.component.css']
})
export class SalaryslipComponent implements OnInit {
  month:FormGroup;
  year:FormGroup;
  Salary: Salary[] = [];
  constructor(public loginservice:EmpserviceService,private router: Router) {
    this.month = new FormGroup({
      "Month" : new FormControl(),
    })
    this.year = new FormGroup({
      "Year" : new FormControl(), 
    })
   }
   
  public logininfo = localStorage.getItem('empid');
  
  
  ngOnInit(): void {
    
} 
getsalary(){
  const salarydata = {
    username: this.logininfo,
    mon : this.month.controls['Month'].value,
    yea : this.year.controls['Year'].value
  }
  console.log(salarydata);
  this.loginservice.getsalarydata(salarydata)
.subscribe( data => {
    console.log('success', data );
    this.Salary = data;
    console.log(localStorage.getItem('empid'));
}
);
  
}
}
