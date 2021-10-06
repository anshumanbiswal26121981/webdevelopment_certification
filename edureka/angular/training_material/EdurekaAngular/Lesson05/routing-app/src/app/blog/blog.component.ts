import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute}  from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
  }
  gotoNewBlog(){
    this.router.navigate(['newblogs'],{relativeTo:this.activatedRoute});
    //activated route is the current parent route /blog
    //then /newblogs
 }
  gotoOtherBlog(){
    this.router.navigate(['otherblogs'],{relativeTo:this.activatedRoute});
  }
}
