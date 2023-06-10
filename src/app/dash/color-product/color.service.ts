import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorProduct } from './Color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private httpClient: HttpClient) {   }
  httpOp:any;
  token=localStorage.getItem('token');
  public GetColorProducts()
  {
    return this.httpClient
      .get<any>('https://localhost:7109/api/ColorProducts',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});

  }
  public PostColorProducts(colorProduct:ColorProduct){
 
    return this.httpClient.post<any>('https://localhost:7109/api/ColorProducts', colorProduct,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public DeleteColorProducts(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/ColorProducts/DeleteCpu?id='+id, id,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public search(name:string,Techno:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/comment/https://localhost:7109/api/ColorProducts/Search?name='+name+'&Techno'+Techno,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token
     })});
		
  }
}
