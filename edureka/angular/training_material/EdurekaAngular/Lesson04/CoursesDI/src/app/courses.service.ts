import { Injectable } from '@angular/core';

import {NewService} from './newservice.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private _newservice : NewService) { }

  getCourses(){
    return[
      {
        "name":"AWS Architect",
        "category":"Cloud Computing",
        "price":"21000"
      },
      {
        "name":"Angular Certification Training",
        "category":"Front End Development",
        "price":"19000"
      },
      {
        "name":"React Certification Training",
        "category":"RPA",
        "price":"20000"
      }
    ];
  }
}
