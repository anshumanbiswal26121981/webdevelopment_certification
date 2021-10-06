import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private selectedId;
  courses=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"NodeJs"},
    {"id":3,"name":"React"},
    {"id":4,"name":"MongoDB"},
    {"id":5,"name":"Express"},
  ];
  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() { }

  onClick(course){
    this.router.navigate(['/courses',course.id]); 
    //pass the course id associated with the course name user clicked on, to the dynamic :id route  url parameter
  }
  

 
}
