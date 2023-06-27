import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public GetList(name:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Departments/GetList?name='+name,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public GetListComboBox()
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Departments/GetListComboBox',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
  }
  public Insert(codeDepartment:string,nameDepartment:string){
 
    return this.httpClient.post<any>('https://localhost:7109/api/Departments/Insert?codeDepartment='+codeDepartment+'&nameDepartment='+nameDepartment,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
  public Delete(id:number){
    return this.httpClient.post<any>('https://localhost:7109/api/Departments/Delete?id='+id, {headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }
}
