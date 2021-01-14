import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { EmpserviceService } from '../empservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {
  disabledbutton : boolean = true ;
  userform:FormGroup;
  public userdetails=[];
  constructor(private loginservice:EmpserviceService) {
    this.userform = new FormGroup({
      "Name" : new FormControl(),
      "EmployeeID" : new FormControl(),
      "Gender" :new FormControl(),
      "DOB" :new FormControl(),
      "Address" : new FormControl(),
      "City" : new FormControl(),
      "Country" : new FormControl(),
      "Pincode" : new FormControl(),
      "Phonenumber" : new FormControl(),
      "CompanyCode" : new FormControl(),
      "CompanyName" :new FormControl(),
      "EmployeeGroup" :new FormControl(),
      "EmployeeSubGroup" :new FormControl(),
      "DOJ" :new FormControl()
    })
   }
  public logininfo = localStorage.getItem('empid');
  ngOnInit(): void {
    this.userform.disable();
    const employeeid = {
      username: this.logininfo
    }
        this.loginservice.getuserformdata(employeeid)
    .subscribe(data =>{
      this.userdetails = data;
      console.log(data);
      console.log(data["VORNA"]);
      this.userform.controls['Name'].setValue(data["VORNA"]),
      this.userform.controls['EmployeeID'].setValue(data["PERNR"]),
      this.userform.controls['Gender'].setValue(data["GESCH"]),
      this.userform.controls['DOB'].setValue(data["GBDAT"]),
      this.userform.controls['Address'].setValue(data["STRAS"]),
      this.userform.controls['City'].setValue(data["ORT01"]),
      this.userform.controls['Country'].setValue(data["LAND1"]),
      this.userform.controls['Pincode'].setValue(data["PSTLZ"]),
      this.userform.controls['Phonenumber'].setValue(data["TELNR"]),
      this.userform.controls['CompanyCode'].setValue(data["BUKRS"]),
      this.userform.controls['CompanyName'].setValue(data["BUTXT"]),
      this.userform.controls['EmployeeGroup'].setValue(data["PERSG"]),
      this.userform.controls['EmployeeSubGroup'].setValue(data["PERSK"]),
      this.userform.controls['DOJ'].setValue(data["BEGDA"])
    }  );
  }
  enableformgroup(){
    this.userform.enable();
  }
  disableformgroup(){
    this.userform.disable();
    const profileupdatePayload = {
     name: this.userform.controls['Name'].value,
     employeeid : this.userform.controls['EmployeeID'].value,
     address : this.userform.controls['Address'].value,
     city : this.userform.controls['City'].value,
     country : this.userform.controls['Country'].value,
     pincode : this.userform.controls['Pincode'].value,
     contact : this.userform.controls['Phonenumber'].value,
   }
   this.loginservice.getprofileupdate(profileupdatePayload)
   .subscribe( data => {
      this.userdetails = data;
      console.log(data);
    /* this.userform.controls['Name'].setValue(data["Name"]),
     this.userform.controls['EmployeeID'].setValue(data["EmployeeID"]),
     this.userform.controls['Address'].setValue(data["Address"]),
     this.userform.controls['City'].setValue(data["City"]),
     this.userform.controls['Country'].setValue(data["Country"]),
     this.userform.controls['Pincode'].setValue(data["Pincode"]),
     this.userform.controls['Phonenumber'].setValue(data["Phonenumber"])  */
   } 
     ); 
     Swal.fire('Profile Updated!');
    
  }
}
