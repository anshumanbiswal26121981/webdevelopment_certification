import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router'; //Imports system defined classes

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;  //custom variable

  constructor(private route: ActivatedRoute) { } //DI

  ngOnInit() {
    this.route.data.subscribe( //system defined event triggered when error data occurs
      (data: Data) => {
        this.errorMessage = data['message'];  //store error data in locacl variable
      }
    );

  }

}
