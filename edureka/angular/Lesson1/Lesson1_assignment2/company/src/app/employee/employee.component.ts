import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];//array
  selectedProduct:Employee;
  empList: Employee[]=[];
  errorItem: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.employees = [  //sample JSON data
      {
        id : 1,
        first_name : 'Anshuman',
        last_name : 'Biswal',
        dept : 'ves',
        city : 'Bangalore',
        email: 'abc@xyz.com',
        showEdit: false,
        showUpdate: false
      },
  
      {
        id : 2,
        first_name : 'Swati',
        last_name : 'Biswal',
        dept : 'ves',
        city : 'Bangalore',
        email: 'def@xyz.com',
        showEdit: false,
        showUpdate: false
      },
  
      {
        id : 3,
        first_name : 'laisha',
        last_name : 'Biswal',
        dept : 'ves',
        city : 'Bangalore',
        email: 'ghi@xyz.com',
        showEdit: false,
        showUpdate: false
      },
  
      {
        id : 4,
        first_name : 'namish',
        last_name : 'Biswal',
        dept : 'ves',
        city : 'Bangalore',
        email: 'jkl@xyz.com',
        showEdit: false,
        showUpdate: false
      },
  
      {
        id : 5,
        first_name : 'Anupam',
        last_name : 'Biswal',
        dept : 'ves',
        city : 'Bangalore',
        email: 'mno@xyz.com',
        showEdit: false,
        showUpdate: false
      },
  
      {
        id : 6,
        first_name : 'Anu',
        last_name : 'Biswal',
        dept : 'ves',
        city : 'Bangalore',
        email: 'pqr@xyz.com',
        showEdit: false,
        showUpdate: false
      },
      {
        id : 7,
        first_name : 'Ajith',
        last_name : 'R',
        dept : 'iot',
        city : 'Bangalore',
        email: 'stu@xyz.com',
        showEdit: true,
        showUpdate: true
      },
      {
        id : 8,
        first_name : 'Piyush',
        last_name : 'Mashrani',
        dept : 'iot',
        city : 'Bangalore',
        email: 'vwx@xyz.com',
        showEdit: true,
        showUpdate: true
      },
      {
        id : 9,
        first_name : 'Agila',
        last_name : 'G',
        dept : 'ves',
        city : 'Bangalore',
        email: 'yz@xyz.com',
        showEdit: true,
        showUpdate: true
      },
      {
        id : 10,
        first_name : 'Lakshmikant',
        last_name : 'raju',
        dept : 'iot',
        city : 'Bangalore',
        email: 'abcdef@xyz.com',
        showEdit: true,
        showUpdate: true
      }
     
    ]
  }

  addEmployee(emp: Employee) { 
    if(this.empList.indexOf(emp) === -1) {    
      this.empList.push(emp);                  
      this.errorItem = false;                       
    }
    else if (this.empList.indexOf(emp) > -1) { 
      this.errorItem = true;                        
    }  
  }

  editEmpoyee(emp: Employee) { 
    this.updateEmployee(emp.id, emp);
  }

  updateEmployee(id: number, emp: Employee) { 
     var existing_emp = this.empList.find(x=> x.id === id) as Employee;
    if(existing_emp === null) {    
      this.addEmployee(emp); 
      this.errorItem = false;                       
    } else {
    if (id > -1) {
      var index  = this.empList.indexOf(existing_emp);                             
      this.empList.splice(index, 1);// remove 
      this.empList.splice(index,0, emp); // replace the new employee in the sepcified index
      this.errorItem = false;  
     } else {
      this.errorItem = true;  
     }
     
    }
  }
 
}
