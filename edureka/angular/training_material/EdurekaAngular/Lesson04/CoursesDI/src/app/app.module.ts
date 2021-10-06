import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {CoursesService} from './courses.service';
import {NewService} from './newservice.service';
import { NewappcomponentComponent } from './newappcomponent/newappcomponent.component';
import { ReactivejsComponent } from './reactivejs/reactivejs.component';
import {HttpClientModule} from '@angular/common/http';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
@NgModule({
  declarations: [
    AppComponent,
    NewappcomponentComponent,
    ReactivejsComponent,
    Newcomponent2Component,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CoursesService,NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
