import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather} from '../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  errorMessage: string;
  cityName: string;
  disabledForecastButton: boolean;
  weatherForecastData:any;
  cityinitail:string;
  
  constructor(private _weatherService: WeatherService) {   } //DI

  ngOnInit() {
    this.cityinitail = 'Mumbai';
    this._weatherService.getWeatherForecast(this.cityinitail)
          .subscribe(data => { this.weatherForecastData = data} , error => this.errorMessage = error );
  }

  onSubmitDatabinding() { //custom event handler on button click
    //call service method in async mode, pass city name
    this._weatherService.getWeatherForecast(this.cityName).subscribe(data => { 
         this.weatherForecastData = data} , error => this.errorMessage = error 
      );
  }
  
  onSearchLocationWithEvent(event: Event) { //custom event handler for key press in the textbox
    this.cityName = (<HTMLInputElement>event.target).value;
  }
}

