import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  model: any = {
    
  };
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model,null,1));
    //null= no spaces
    //1 = print on  new lines 
  }
  constructor() { }

  ngOnInit() {
  }

}
