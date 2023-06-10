import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisplayProduct } from './display';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private httpClient: HttpClient) {   }
  httpOp:any;
  token=localStorage.getItem('token');
  public GetDisplayProducts()
  {
    return this.httpClient
      .get<any>('https://localhost:7109/api/DisplayProducts',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});

  }
  public PostDisplayProducts(displayProduct:DisplayProduct){
 
    return this.httpClient.post<any>('https://localhost:7109/api/DisplayProducts', displayProduct,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public DeleteDisplayProducts(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/DisplayProducts/DeleteDisplay?id='+id, id,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public search(name:string,Techno:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/comment/https://localhost:7109/api/DisplayProducts/Search?name='+name+'&Techno'+Techno,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token
     })});
		
  }
}
