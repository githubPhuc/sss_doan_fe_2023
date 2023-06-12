import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from './City';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public getCities(NameCity:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Cities?name='+NameCity,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public PostCity(NameCity:string){
 
    return this.httpClient.post<any>('https://localhost:7109/api/Cities?CityName='+ NameCity,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/Cities/DeleteCity?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
