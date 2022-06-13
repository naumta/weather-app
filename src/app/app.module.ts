import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherFiveDayComponent } from './components/weather-five-day/weather-five-day.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherHourlyComponent } from './components/weather-hourly/weather-hourly.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WeatherTodayComponent,
    WeatherFiveDayComponent,
    NotFoundComponent,
    WeatherHourlyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
