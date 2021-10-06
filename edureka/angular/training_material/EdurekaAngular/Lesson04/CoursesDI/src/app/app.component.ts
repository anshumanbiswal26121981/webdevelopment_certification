import { Component,OnInit } from '@angular/core';
import {CoursesService} from './courses.service';
import {NewService} from './newservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  public course=[];
  constructor(private _courseservice: CoursesService,
               private _newcourseservice: NewService,){}
  
  ngOnInit(){
    this.course= this._courseservice.getCourses();
  }
}
