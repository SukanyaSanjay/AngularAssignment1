import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[]=[];

  constructor(private employeeService:EmployeeService) { 
    
  }

  ngOnInit(): void {
    this.employees=this.employeeService.onGet();
    

  }
  onDelete(id: number){
    this.employeeService.onDelete(id);

  }
  
  }

  

