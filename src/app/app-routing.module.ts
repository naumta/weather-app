import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherFiveDayComponent } from './components/weather-five-day/weather-five-day.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';

const routes: Routes = [
  { path: 'one-day', component: WeatherTodayComponent },
  { path: 'five-day', component: WeatherFiveDayComponent },
  { path: '', redirectTo: '/one-day', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
