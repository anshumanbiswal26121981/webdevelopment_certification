import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-newappcomponent',
  templateUrl: './newappcomponent.component.html',
  styleUrls: ['./newappcomponent.component.css'],
 

})
export class NewappcomponentComponent implements OnInit {
  public course=[];
  constructor(private _courseservice: CoursesService){}
  
  ngOnInit(){
    this.course= this._courseservice.getCourses();
  } 

}
