import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WardsService {
  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public getWards(NameWard:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Wards?name='+NameWard,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public PostWards(NameWard:string,IdDistrict:number,IdCity:number){
 
    return this.httpClient.post<any>('https://localhost:7109/api/Wards?NameWards='+ NameWard+'&IdDistrict='+IdDistrict+'&IdCity='+IdCity,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/Wards/DeleteWards?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
