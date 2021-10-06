import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-forms5',
  templateUrl: './forms5.component.html',
  styleUrls: ['./forms5.component.css']
})
export class Forms5Component implements OnInit {
   myFormModel: FormGroup;
  constructor() { 
    this.myFormModel= new FormGroup({
        id: new FormControl(''),
        description: new FormControl(''),
        seller: new FormControl('')
    });
  }
  updateEntireForm(){
    this.myFormModel.setValue({
         id:123,
         description: 'A Great product',
         seller: 'XYZ Corp'
    });
  }
  updatePartOfTheForm(){
    this.myFormModel.patchValue({description:' The Best Product'});
  }

  ngOnInit() {
  }

}
