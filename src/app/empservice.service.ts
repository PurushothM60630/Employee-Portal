import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
export interface logindata {

  username: string,
  password: string
}
export interface profile {
  PERNR: string,
  ENDDA: string,
  BEGDA: string,
  BUKRS: string,
  WERKS: string,
  PERSG: string,
  PERSK: string,
  ABKRS: string,
  ORGEH: string,
  NACHN: string,
  VORNA: string,
  GESCH: string,
  GBDAT: string,
  GBDEP: string,
  NATIO: string,
  FAMST: string,
  STRAS: string,
  ORT01: string,
  PSTLZ: string,
  LAND1: string,
  TELNR: string,
  BUTXT: string
}
export interface editprofile {
  STRAS : string,
  ORT01 : string,             
  PSTLZ : string,            
  LAND1 : string,             
  TELNR : string,             
  NACHN : string,             
  VORNA : string,
  GESCH : string
}
export interface Salary {
  ID : string,
  PERNR :string,
  DOP :string,
  NAME :string,
  DESIGNATION :string,
  EMAIL :string,
  ACCOUNTNUMBER :string,
  BANKNAME :string,
  BASICPAY :string,
  DA :string,
  HRA :string,
  BONUSPAY :string,
  NETPAY :string,
  MONTHPAY :string,
  YEARPAY :string
}
export interface viewleave {
  LEAVEID: string,
  FROMDATE :string,
  TODATE : string,
  LEAVETYPE :string,
  EMAILTO :string,
  REASON :string,
  STATUS :string
}
export interface createleave {
  EMPLOYEEID: string,
  EMAILTO: string,
  NAME:string,
  LEAVEID:string,
  LEAVETYPE:string,
  DEPT:string,
  FROMDATE:string,
  TODATE:string,
  REASON:string
}
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  public isLoading:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false);
  constructor(private http: HttpClient) { }
  postlogindata(loginPayload): Observable<logindata[]> {
    return this.http.post<logindata[]>( 'http://localhost:8080/' + 'employeelogin' , loginPayload );
  }
  getuserformdata(employeeid): Observable<profile[]> {
    return this.http.post<profile[]>( 'http://localhost:8080/' + 'employeeprofile' , employeeid);
   } 
   getprofileupdate(profileupdatePayload): Observable<editprofile[]> {
    return this.http.post<editprofile[]>( 'http://localhost:8080/' + 'empproupd' , profileupdatePayload );
  }
  getcreateleavedata(employeeid): Observable<createleave[]> {
    console.log(employeeid);
    return this.http.post<createleave[]>( 'http://localhost:8080/' + 'empcleave' , employeeid);
  }
  getleavedata(employeeid): Observable<viewleave[]> {
    console.log(employeeid);
    return this.http.post<viewleave[]>( 'http://localhost:8080/' + 'empvleave' , employeeid);
  }
  getsalarydata(salarydata): Observable<Salary[]> {
    console.log(salarydata);
    return this.http.post<Salary[]>( 'http://localhost:8080/' + 'empsalary' , salarydata );
  }
  
}
