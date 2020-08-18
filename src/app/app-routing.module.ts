import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from 'src/app/component/emp-list/emp-list.component';
import { EmpDetailComponent } from 'src/app/component/emp-detail/emp-detail.component';


const routes: Routes = [
  {
    path:'emp_list',
    component:EmpListComponent
  },
  {
    path:'emp_detail/:empId',
    component:EmpDetailComponent
  },
  {
    path:'emp_create',
    component:EmpDetailComponent
  },
  {
    path:'',
    redirectTo:'emp_list',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
