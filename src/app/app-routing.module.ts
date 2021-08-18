import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './employee-list/edit/edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path:"employees",
    component:EmployeeListComponent

  },
  {
    path:'', redirectTo:'employees', pathMatch:'full'
  },
  {
    path:"employees/add/:id",
    component:EditComponent
  },
  {
    path:"employees/edit/:id",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
