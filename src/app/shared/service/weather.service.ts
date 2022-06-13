import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherFiveDays, IWeatherToday } from '../model/weather-app.model';

const API_KEY = `4454b11a288b8e0044e9fec3ac5cde52`;

const API_URL = `https://api.openweathermap.org/data/2.5/weather?`;

const API_URL_5days = "https://api.openweathermap.org/data/2.5/forecast?";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getTodayWeather(city: string): Observable<IWeatherToday> {
    return this.http.get<IWeatherToday>(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
  }

  getFiveDaysWeather(city: string): Observable<IWeatherFiveDays> {
    return this.http.get<IWeatherFiveDays>(`${API_URL_5days}&q=${city}&appid=${API_KEY}&units=metric`);
  }
}
