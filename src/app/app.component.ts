import { Component, OnInit } from '@angular/core';
import { IWeatherToday } from './shared/model/weather-app.model';
import { WeatherService } from './shared/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  city: string = "Minsk";
  currentWeather!: IWeatherToday;


  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {

  }

  getCurrentWeather(city: string): void {
    this.weatherService.getTodayWeather(city).subscribe((today:IWeatherToday) => {
      this.currentWeather = today;
      console.log(this.currentWeather);
    }), (error: any) => {
      console.log(error);
    }
  }



}
