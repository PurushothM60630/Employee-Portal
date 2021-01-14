import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpserviceService } from '../empservice.service';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})  
export class EmploginComponent implements OnInit {
  public username: string;
  public password: string;
  public loading : boolean;
  hide = true;
  constructor(private loginservice:EmpserviceService,private router: Router) { }
  public logindetails=[];
  ngOnInit(): void {
  }
  onSubmit(form:NgForm):void{
    this.loading = true;
    const loginPayload = {
      username: form.value["username"],
      password: form.value["password"]
    }
    this.loginservice.postlogindata(loginPayload)
    .subscribe( data => {
        console.log('success',data["Status"]);
        if( data["Status"] == 1 ){
          this.router.navigate(['navbar']);
          localStorage.setItem('empid',this.username);
          console.log(localStorage.getItem('empid'));
        }
        else {
          alert("Invalid Username or Password");
          this.loading = false;
        }
      }
    );
     
  }
    
  }

