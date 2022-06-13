import { Component, Input, OnInit } from '@angular/core';
import { IWeatherFiveDays } from 'src/app/shared/model/weather-app.model';
import { WeatherService } from 'src/app/shared/service/weather.service';

@Component({
  selector: 'app-weather-five-day',
  templateUrl: './weather-five-day.component.html',
  styleUrls: ['./weather-five-day.component.scss']
})
export class WeatherFiveDayComponent implements OnInit {

  city: string = "Minsk";

  fiveDays: IWeatherFiveDays["list"] = [];
  forecastOneDay: IWeatherFiveDays["list"] = [];

  dtTxt: string = "";
  hourlyWeatherEachDay: IWeatherFiveDays["list"] = [];



  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getForecastFiveDays(this.city);
  }

  getForecastFiveDays(city: string): void {
    this.weatherService.getFiveDaysWeather(city).subscribe((forecast:IWeatherFiveDays) => {
      this.fiveDays = forecast.list;
      //console.log(this.fiveDays);

      this.forecastOneDay = forecast.list.filter(data =>
        data.dt_txt.includes("15:00:00"));
        //console.log(this.forecastOneDay);
    })
  }

  getHourlyWeather(dtTxt: string): void {
    this.hourlyWeatherEachDay = [];

    let onlyDate = dtTxt.slice(0, 10);
    //console.log(onlyDate);

    for (let i = 0; i < this.fiveDays.length; i++) {
      if (this.fiveDays[i].dt_txt.includes(onlyDate)) {
        this.hourlyWeatherEachDay.push(this.fiveDays[i]);
        console.log(this.hourlyWeatherEachDay);
      }
    }
  }

}
