import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';
//import { Console } from 'console';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number | undefined;
  header: string | undefined ;
  employee: Employee={
    id:0,
    f_name:"",
    l_name:"",
    addr:""

  };
  

  constructor(private router:Router, private route: ActivatedRoute, private employeeService:EmployeeService) {
    const id: string = route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get('id'))

   this.header = this.id ==0 ? 'Add Employee':'Edit Employee';

   if(this.id!=0)
   {
     this.employeeService.onGetEmployee(this.id);
   }

    
  }
  onSubmit(form:NgForm){
    let employee: Employee={
      id:form.value.id,
      f_name:form.value.f_name,
      l_name:form.value.l_name,
      addr:form.value.addr
    }
    this.employeeService.onAdd(employee);
    this.router.navigateByUrl('');
  }

}
