import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-india-weather',
  templateUrl: './india-weather.component.html',
  styleUrls: ['./india-weather.component.css']
})
export class IndiaWeatherComponent implements OnInit{


  weatherData:any[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any[]>('/assets/db.json').subscribe((data: any[])=>{this.weatherData=data;
    });
    
  }
//  weatherData:any;
//  city!: string;
//  state!: string;
// constructor(private weather:ServiceService){}

// getWeather():void{
//   this.weather.getWeather(this.city,this.state).subscribe((Data: any)=>{this.weatherData=Data;
//   });
  
// }



}
