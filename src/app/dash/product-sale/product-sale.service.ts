import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from './Sale';

@Injectable({
  providedIn: 'root'
})
export class ProductSaleService {

  constructor(private httpClient:HttpClient) { }
  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public GetListSale()
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/ProductSales/GetListSale',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public GetListSaleByID(Id:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/ProductSales/GetListSaleByID?id='+Id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public GetListSaleOnIdProduct(Id:number)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/ProductSales/GetListSaleOnIdProduct?id='+Id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }

  public Insert(sale:Sale,id:number){
 
    console.log(sale);
    return this.httpClient.post<any>('https://localhost:7109/api/ProductSales/Insert?idproduct='+id,sale,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Update(sale:Sale,Id:number){  
 
    return this.httpClient.post<any>('https://localhost:7109/api/ProductSales/Update?id='+Id,sale,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public UpdateProductSale(idProduct:number,IdSale:number){  
 
    return this.httpClient.post<any>('https://localhost:7109/api/ProductSales/UpdateProductSale?idProduct='+idProduct+'&IdSale='+IdSale,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/ProductSales/DeleteSale?idSale='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
