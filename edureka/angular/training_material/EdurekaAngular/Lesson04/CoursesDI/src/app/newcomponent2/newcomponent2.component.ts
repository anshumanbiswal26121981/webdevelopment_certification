import { Component, OnInit } from '@angular/core';
import {NewService} from '../newservice.service';
@Component({
  selector: 'app-newcomponent2',
  templateUrl: './newcomponent2.component.html',
  styleUrls: ['./newcomponent2.component.css']
})
export class Newcomponent2Component implements OnInit {
  public course=[];
  public errorMsg: any;
  constructor(private _newcourseservice: NewService){}
  
  ngOnInit(){
    this._newcourseservice.getCourses().subscribe(
                 data  => this.course=data,
                 error => this.errorMsg = error.message //error handling
                 );
  } 

}
