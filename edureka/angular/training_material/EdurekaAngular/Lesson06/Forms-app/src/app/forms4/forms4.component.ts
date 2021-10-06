import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-forms4',
  templateUrl: './forms4.component.html',
  styleUrls: ['./forms4.component.css']
})
export class Forms4Component  {
  myGroup: FormGroup;
  cityArray: FormArray;
  constructor(private fb:FormBuilder) {
 
    this.cityArray = new FormArray(
      [new FormControl('A'),
      new FormControl('B')]);

      this.myGroup = new FormGroup({
        cities: this.cityArray
    });
  
  }
 
  

}
