import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SsdProduct } from './Ssd';

@Injectable({
  providedIn: 'root'
})
export class SsdService {

  constructor(private httpClient: HttpClient) {   }
  httpOp:any;
  token=localStorage.getItem('token');
  public GetSsdProduct()
  {
    return this.httpClient
      .get<any>('https://localhost:7109/api/SsdProducts',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});

  }
  public PostSsdProduct(SsdProduct:SsdProduct){
 
    return this.httpClient.post<any>('https://localhost:7109/api/SsdProducts', SsdProduct,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public DeleteSsdProduct(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/SsdProducts/DeleteSsd?id='+id, id,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
