import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDisplayService {
  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public Get(name:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/CardDisplays?name='+name,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public Post(Name:string,TechnicalData:string){
 
    return this.httpClient.post<any>('https://localhost:7109/api/CardDisplays?Name='+Name+'&TechnicalData='+ TechnicalData,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/CardDisplays/DeleteCardDisplay?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
