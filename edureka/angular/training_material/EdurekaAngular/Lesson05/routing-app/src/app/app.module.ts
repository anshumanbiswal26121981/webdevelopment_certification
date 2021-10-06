import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { NewblogsComponent } from './newblogs/newblogs.component';
import { OtherblogsComponent } from './otherblogs/otherblogs.component';


const ROUTES: Routes=[                                           //Routes declaration in this array
   {path:'',component:HomeComponent},                            //localhost:4200/
   {path:'blog',component:BlogComponent,                         //localhost:4200/blog
      children:[ 
        {path:'newblogs',component:NewblogsComponent},           //localhost:4200/blog/newblogs
        {path:'otherblogs',component:OtherblogsComponent},       //localhost:4200/blog/otherblogs
      ]
   },
   {path:'about',component:AboutComponent},                      //localhost:4200/about
   {path:'courses',component:CoursesComponent},                  //localhost:4200/courses
   {path:'courses/:id',component:CoursedetailsComponent},        //localhost:4200/courses/101
   {path:'**',component:ErrorComponent},                         //localhost:4200/any thing else
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    ErrorComponent,
    CoursesComponent,
    CoursedetailsComponent,
    NewblogsComponent,
    OtherblogsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)           //Register the routes array with angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
