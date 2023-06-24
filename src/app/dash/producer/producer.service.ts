import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producer } from './Producer';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  strToken = 'Bearer ' + this.token;
  public GetList(name: string, code: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/Producers/GetList?name=' + name + '&code=' + code, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public Load_CBX() {
    return this.httpClient
      .get<any>('https://localhost:7109/api/Producers/Load_CBX', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public GetListById(id: number) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/Producers/GetListById?id=' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public Insert(model: Producer) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/Producers/Insert', model, {
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
  public uploadImage(code: any, data: any) {
    return this.httpClient.post('https://localhost:7109/api/Producers/uploadImage?code=' + code, data, {
      reportProgress: true,
      observe: 'events'
    });
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/Producers/Delete?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
