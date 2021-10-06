import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { PipescompComponent } from './pipescomp.component';
import { CustompipeComponent } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    PipescompComponent,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
