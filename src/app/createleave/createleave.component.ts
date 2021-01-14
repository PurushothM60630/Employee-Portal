import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { EmpserviceService } from '../empservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-createleave',
  templateUrl: './createleave.component.html',
  styleUrls: ['./createleave.component.css']
})
export class CreateleaveComponent implements OnInit {
  userform:FormGroup;
  public createleave=[];
  constructor(private loginservice:EmpserviceService) { 
    this.userform = new FormGroup({
      "EmployeeID" : new FormControl(),
      "EmailTo" :new FormControl(),
      "Leavetype" :new FormControl(),
      "Reason" :new FormControl(),
      "FromDate" :new FormControl(),
      "ToDate" :new FormControl()
    })
   }
  public logininfo = localStorage.getItem('empid');
  ngOnInit(): void {
  }
  createleaverequest(){
    const createleaverequestPayload = {
      employeeid : this.userform.controls['EmployeeID'].value,
      emailto :this.userform.controls['EmailTo'].value,
      Leavetype : this.userform.controls['Leavetype'].value,
      Reason : this.userform.controls['Reason'].value,
      Fromdate : this.userform.controls['FromDate'].value,
      Todate : this.userform.controls['ToDate'].value
    }
    this.loginservice.getcreateleavedata(createleaverequestPayload)
   .subscribe( data => {
      this.createleave = data;
      console.log(data);
   
  }
   );
   Swal.fire('Leave Request Has Been Created! COME BACK SOON!!!');
}
}
