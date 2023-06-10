import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CpuProduct } from './Cpu';

@Injectable({
  providedIn: 'root'
})
export class CpuService {
  constructor(private httpClient: HttpClient) {   }
  httpOp:any;
  token=localStorage.getItem('token');
  public GetCpuProducts()
  {
    return this.httpClient
      .get<any>('https://localhost:7109/api/CpuProducts',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});

  }
  public PostCpuProducts(cpuProduct:CpuProduct){
 
    return this.httpClient.post<any>('https://localhost:7109/api/CpuProducts', cpuProduct,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public DeleteCpuProducts(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/CpuProducts/DeleteCpu?id='+id, id,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public search(name:string,Techno:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7043/api/comment/https://localhost:7109/api/CpuProducts/Search?name='+name+'&Techno'+Techno,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +this.token
     })});
		
  }
}
