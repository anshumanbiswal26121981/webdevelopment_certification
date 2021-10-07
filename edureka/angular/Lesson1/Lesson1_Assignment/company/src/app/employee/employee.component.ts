import { Component, OnInit } from '@angular/core';

interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  dept: string;
  city: string;
  email: string;
}

const EMPLOYEES: Employee[] = [
  {
    id: '1234',
    first_name: 'Anshuman',
    last_name: 'Biswal',
    dept: 'ves',
    city: 'bangalore',
    email: 'abc@xyz.com'
  },
  {
    id: '4567',
    first_name: 'Namish',
    last_name: 'Biswal',
    dept: 'ves',
    city: 'Bangalore',
    email: 'def@xyz.com'
  },
  {
    id: '891011',
    first_name: 'swati',
    last_name: 'Biswal',
    dept: 'ves',
    city: 'bangalore',
    email: 'ghi@xyz.com'
  },
  {
    id: '121314',
    first_name: 'Laisha',
    last_name: 'Biswal',
    dept: 'ves',
    city: 'bangalore',
    email: 'jkl@xyz.com'
  },
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee = EMPLOYEES;
}
