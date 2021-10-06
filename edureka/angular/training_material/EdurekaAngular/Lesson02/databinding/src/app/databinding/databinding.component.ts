import { Component, OnInit } from '@angular/core';
import {EventBindingComponent} from './event-binding.component';
import {TwoWayBindingComponent} from './two-way-binding.component';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {
  
  stringInterpolation: string="This is string Iterpolation!";
  numberInterpolation:number=3;
  

  onMyClick(value: string){
     alert(value);
  }

}
