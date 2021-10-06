import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-forms3',
  templateUrl: './forms3.component.html',
  styleUrls: ['./forms3.component.css']
})
export class Forms3Component implements OnInit{
   myFormModel: FormGroup;
   ngOnInit(){
    this.myFormModel= this.fb.group({
      username: [null,Validators.required],
      ssn:  [null,Validators.required],
   
        password: '',
        pconfirm: ''
     
    });
   }
   constructor(private fb:FormBuilder) {
   }
   onSubmit(){
     console.log(this.myFormModel.value);
   }
}
