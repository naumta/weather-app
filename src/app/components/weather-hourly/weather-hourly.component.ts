import { Component, Input, OnInit } from '@angular/core';
import { IWeatherFiveDays } from 'src/app/shared/model/weather-app.model';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.scss']
})
export class WeatherHourlyComponent implements OnInit {

  @Input() hourlyWeather!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
