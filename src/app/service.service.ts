import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  // private apiKey='YOUR_OPENWEATHER_API_KEY';
  // private apiUrl='';
  constructor( public http:HttpClient) { 

  }

  // getWeather(city:string,state:string):Observable<any>{
  //   const params={
  //     q:`${city},${state}`,
  //     appid:this.apiKey,
  //     units:20,
  //   };
  //   return this.http.get(this.apiUrl,{params});
  // }
  

}
