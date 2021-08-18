import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:Employee[]=[{
    id:1,
    f_name:"Sukanya",
    l_name:"gaikwad",
    addr:"kop"
  }];

  constructor() { }
    onGet()
      {
        return this.employees;

      }
      onGetEmployee(id: Number)
      {
        return this.employees.find(x=>x.id===id);
      }
      onAdd(employee:Employee)
      {
        this.employees.push(employee);
      }
      onDelete(id: Number){
       /* let employee=this.employees.find(x=>x.id===id);
        let index=this.employees.indexOf(employee,0);
        this.employees=this.employees.slice(index,1);*/
       
        
         
    
      }
    
  
}
