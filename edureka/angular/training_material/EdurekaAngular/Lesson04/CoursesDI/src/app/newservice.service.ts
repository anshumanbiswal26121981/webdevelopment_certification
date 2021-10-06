import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Course} from './courses';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewService {
  private url: string="/assets/data/courses.json";
  constructor(private http: HttpClient){}
  
  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.url);//.pipe(
       //  catchError((error:HttpErrorResponse)=>this.errorHandler) );
  }

  errorHandler(error:HttpErrorResponse){//handler to trap errors
     return throwError(error.message);
  }
}
