import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImportBillDepot } from './ImportDepot';
import { ImportBillDepotDetail } from './ImportDepotDetail';

@Injectable({
  providedIn: 'root'
})
export class ImportDepotService {

  constructor(private httpClient: HttpClient) { }


  token = localStorage.getItem('token');
  strToken = 'Bearer ' + this.token;
  public GetList(codeBill: string, nameDepot: string) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/ImportBillDepots/GetList?codeBill=' + codeBill + '&nameDepot=' + nameDepot, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public GetListOnID(id: number) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/ImportBillDepots/GetListOnID?id=' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public GetListDetail(id: number) {
    return this.httpClient
      .get<any>('https://localhost:7109/api/ImportBillDepots/GetListDetail?Id=' + id, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });

  }
  public Insert(model: ImportBillDepot) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/ImportBillDepots/Insert', model, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
  public InsertDetail(model: ImportBillDepotDetail) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/ImportBillDepots/InsertDetail', model, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
  public Update(model: ImportBillDepot,id:number) {
    return this.httpClient
      .post<any>('https://localhost:7109/api/ImportBillDepots/Update?id='+id, model, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.strToken
        })
      });
  }
 
  public DeleteBill(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/ImportBillDepots/DeleteBill?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public DeleteDetail(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/ImportBillDepots/DeleteDetail?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  
  public acceptance(id:number,user:string){
    return this.httpClient.post<any>('https://localhost:7109/api/ImportBillDepots/acceptance?id='+id+'&user='+user, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
