import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RamProduct } from './Ram';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  constructor(private httpClient: HttpClient) {   }
  httpOp:any;
  token=localStorage.getItem('token');
  public GetRamProducts()
  {
    return this.httpClient
      .get<any>('https://localhost:7109/api/RamProducts',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});

  }
  public PostRamProducts(RamProduct:RamProduct){
 
    return this.httpClient.post<any>('https://localhost:7109/api/RamProducts', RamProduct,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public DeleteRamProducts(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/RamProducts/DeleteRam?id='+id, id,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
