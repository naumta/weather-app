import { Component, OnInit } from '@angular/core';
import { IWeatherToday } from 'src/app/shared/model/weather-app.model';
import { WeatherService } from 'src/app/shared/service/weather.service';

const IMG_URL = "https://api.openweathermap.org/img/w";

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {

  city: string = "Minsk";

  currentWeather!: IWeatherToday;

  todayDate: Date = new Date();
  icon!: string;
  error!: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeather(this.city);
  }

  getCurrentWeather(city: string): void {
    this.weatherService.getTodayWeather(city).subscribe((today:IWeatherToday) => {
      this.currentWeather = today;
      this.icon = `${IMG_URL}/${today.weather[0].icon}.png`;
      //console.log(this.currentWeather);
    })
  }

}
