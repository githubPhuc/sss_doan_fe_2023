import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public getDistrict(NameDistrict:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Districts?name='+NameDistrict,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public LoadOnCity(idCity:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Districts/LoadOnCity?idCity'+idCity,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public PostDistrict(NameDistrict:string,idCity:number){
 
    return this.httpClient.post<any>('https://localhost:7109/api/Districts?NameDistrict='+ NameDistrict+'&idCity='+idCity,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/Districts/DeleteDistrict?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
