import { Component } from '@angular/core';
import {HighlightDirective} from './highlight.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items=[1,2,3,4,5];
  public switch=true; 
  public course="aws";
  onSwitch(){
     this.switch=!this.switch;
  }


 

}
