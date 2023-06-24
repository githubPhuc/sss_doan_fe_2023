import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Depot } from './Depot';


@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private httpClient:HttpClient) { }
  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public get(name:string,code:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Depots/Get?name='+name+'&code='+code,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public FindID(Id:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Depots/FindID?id='+Id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }

  public Post(depot:Depot){
 
    return this.httpClient.post<any>('https://localhost:7109/api/Depots',depot,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Put(depot:Depot,Id:number){  
 
    return this.httpClient.post<any>('https://localhost:7109/api/Depots/Put?id='+Id,depot,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/Depots/Delete?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
