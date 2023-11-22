import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaWeatherComponent } from './india-weather/india-weather.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:IndiaWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
