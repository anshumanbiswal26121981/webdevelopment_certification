import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
      <input type="text" [(ngModel)]="person.name">
      <input type="text" [(ngModel)]="person.name">
       `
})
export class TwoWayBindingComponent  {
   person ={ //JSON
     name: 'John',
     age: 27
   }
}
