import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public GetList(name:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/CategoryProducts/GetList?name=a'+name,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public insert(codeCategory:string,nameCategory:string){
 
    return this.httpClient.post<any>('https://localhost:7109/api/CategoryProducts/insert?codeCategory='+codeCategory+'&nameCategory='+ nameCategory,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/CategoryProducts/delete?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
