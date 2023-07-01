import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  strToken = 'Bearer ' + this.token;
  public GetList(nameProduct: string, nameProduce: string, nameRam: string, nameCpu: string, nameDisplay: string, nameColor: string, nameCard: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/Products/GetList?nameProduct='
       + nameProduct + '&nameProduce=' + nameProduce+ '&nameRam=' + nameRam+ '&nameCpu=' 
       + nameCpu+ '&nameDisplay=' + nameDisplay+ '&nameColor=' + nameColor+ '&nameCard=' + nameCard, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  
  public GetProductById(id: number) {
    console.log(id);
    return this.httpClient
      .get<any>('https://localhost:7109/api/Products/GetProductById?id=' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public GetProductOnIdDetail(id: number) {
    console.log(id);
    return this.httpClient
      .get<any>('https://localhost:7109/api/Products/GetProductOnIdDetail?id=' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public ListImages(id: number) {
    console.log(id);
    return this.httpClient
      .get<any>('https://localhost:7109/api/Products/ListImages?idProduct=' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  
  public Insert(model: Product) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/Products/Insert', model, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
  public Update(model: Product,id:number) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/Products/Update?id='+id, model, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
  public StopCooperating(id: number) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/Producers/StopCooperating?id='+id,  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
  public uploadImage(id: any, data: any) {
    return this.httpClient.post('https://localhost:7109/api/Products/uploadImage?id=' + id, data, {
      reportProgress: true,
      observe: 'events'
    });
  }
  public DeleteProduct(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/Products/DeleteProduct?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
