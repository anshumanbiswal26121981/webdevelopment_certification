import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  model: any = {}; //empty sample class to reference in the template form
  
  onSubmit() {//display the form data on submit 
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

  constructor() { }

  ngOnInit() {
  }

}
