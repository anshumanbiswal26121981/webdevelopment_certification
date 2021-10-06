import { Component, OnInit,DoCheck} from '@angular/core';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component implements OnInit,DoCheck {
   favouriteColor='';
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log(this.favouriteColor)
  }

}
