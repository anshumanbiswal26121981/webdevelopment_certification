import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Forms1Component } from './forms1/forms1.component';
import { Forms2Component } from './forms2/forms2.component';
import { Forms3Component } from './forms3/forms3.component';
import { Forms4Component } from './forms4/forms4.component';
import { Forms5Component } from './forms5/forms5.component';

@NgModule({
  declarations: [
    AppComponent,
    Forms1Component,
    Forms2Component,
    Forms3Component,
    Forms4Component,
    Forms5Component
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
