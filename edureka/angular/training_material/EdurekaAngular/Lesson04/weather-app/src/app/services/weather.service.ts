import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //import to call RESt API
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl : string;
  appId: string;
  units: string;
  url : string;
  forecast: any;
  cityName:string;
  constructor(private http: HttpClient) { //DI 
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/';
    this.appId = 'b5ea0f92c5b8deb13ccec7d557ac6a4d';
    this.units = 'metric';
   // this.cityName="mumbai";
   }
 //  http://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=b5ea0f92c5b8deb13ccec7d557ac6a4d&units=metric;  
   getWeatherForecast(cityName: string): Observable<any> { //calls REST Api , pass city name
    this.url = this.baseUrl + 'forecast?q=' + cityName + '&appid=' + this.appId + '&units=' + this.units  ;     
    console.log(this.url);
    return this.http.get(this.url);

    //this.forecast=this.http.get(this.url);
    //return this.forecast.catch(this.handleError);
 }

 private handleError(error: any) {
   // In a real world app, we might use a remote logging infrastructure
   let errMsg: string;
   errMsg = error.message ? error.message : error.toString();
   console.error(errMsg);
   return Observable.throw(errMsg);
 }
}
