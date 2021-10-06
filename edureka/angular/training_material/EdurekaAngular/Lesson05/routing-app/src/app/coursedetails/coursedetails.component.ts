import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  courseId: any;
  constructor(private router: Router, private route:ActivatedRoute) { } //inject DI ref
  ngOnInit() {
      let id=parseInt(this.route.snapshot.paramMap.get('id'));   //capture the :id param value from the url
      this.courseId=id;
  }
  goBack(){
    let selectedId= this.courseId ? this.courseId: null;  //if courseid store it ,  else store null
    this.router.navigate(['/courses']) //navigate back to courses
  }

}
