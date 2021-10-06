import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-inlinestyle',
  templateUrl: './news-inlinestyle.component.html',
  styles: [
    `p
    {color:blue}
  `]
})
export class NewsInlinestyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
