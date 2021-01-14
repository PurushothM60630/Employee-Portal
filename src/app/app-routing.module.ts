import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploginComponent } from './emplogin/emplogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { CreateleaveComponent } from './createleave/createleave.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { SalaryslipComponent } from './salaryslip/salaryslip.component';
const routes: Routes = [
  {path:'emphome', component:EmploginComponent},
  {path:'navbar',
  component:NavbarComponent ,
  children:[
    { path:'empprofile', 
      component:EmpprofileComponent
    },
    { path:'createleave', 
      component:CreateleaveComponent
    },
    { path:'viewleave', 
      component:ViewleaveComponent
    },
    { path:'salaryslip', 
      component:SalaryslipComponent
    },
  ]
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
