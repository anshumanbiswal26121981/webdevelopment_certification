import { Component, OnInit } from '@angular/core';

import {Employee} from './employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  emplist:Employee[];

  
  
  constructor() { }

  ngOnInit() {
  

 
    this.emplist =[
      {
        employeeId:2,
        firstName:'John',
        LastName:'Smith',
        salary:10000,
        DOB:new Date('11/02/1983'),
        email:'john@abc.com'
      },
      {
        employeeId:3,
        firstName:'Jason',
        LastName:'Smith',
        salary:12000,
        DOB:new Date('08/12/1980'),
        email:'jason@abc.com'
      },
      {
        employeeId:4,
        firstName:'Amber',
        LastName:'Dorothy',
        salary:10000,
        DOB:new Date('04/05/1985'),
        email:'amber@abc.com'
      },
      {
        employeeId:5,
        firstName:'Mark',
        LastName:'Frank',
        salary:15000,
        DOB:new Date('06/10/1982'),
        email:'mark@abc.com'
      },
    ]



    
  }

  

}
