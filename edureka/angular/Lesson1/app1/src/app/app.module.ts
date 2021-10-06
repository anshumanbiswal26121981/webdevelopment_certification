import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { NewsComponent } from './news/news.component';
import { NewsInlinestyleComponent } from './news-inlinestyle/news-inlinestyle.component';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    NewsComponent,
    NewsInlinestyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
