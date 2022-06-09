import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = `https://api.openweathermap.org/data/2.5/weather?`;
const API_KEY = ``

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
}
