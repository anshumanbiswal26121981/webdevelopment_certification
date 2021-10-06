import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {DefaultColorOnEventDirective} from './directives/bgdirective';
import {SortPipe} from './pipes/sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DefaultColorOnEventDirective,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
