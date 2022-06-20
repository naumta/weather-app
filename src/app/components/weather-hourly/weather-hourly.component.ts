import { Component, Input, OnInit } from '@angular/core';

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
