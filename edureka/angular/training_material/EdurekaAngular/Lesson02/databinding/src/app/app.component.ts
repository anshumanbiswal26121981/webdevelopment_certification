import { Component } from '@angular/core';
//import {DatabindingComponent} from './databinding/databinding.component';
import {LifecycleComponent} from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: 
    `
   
      <fa-databinding></fa-databinding>
      <hr/>
      <h1>Lifecyle events! </h1>
      <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
         <p>{{test}}</p>
      </fa-lifecycle>
      
      <button (click)="delete = true">Click to delete </button><br/><br/>
      <button (click)="test = 'Changed Value'">Click to Change Value </button><br/><br/>
      <button (click)="boundValue = 2000">Click to Change Property Binding Value </button>
    `,
  styles: [`
       h1 {color:red; }
  `]
})
export class AppComponent {
  title = 'I changed it !!';
  delete= false;
  test="Starting Value";
  boundValue=1000;
}
