import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }


  token=localStorage.getItem('token');
  strToken='Bearer '+this.token;
  public getAccountAdmin(Fullname:string,Username:string, Email:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Authenticate/getAccountAdmin?Fullname='+Fullname+'&UserName='+Username+'&Email='+Email,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }
  public getAccountUser(Fullname:string,Username:string, Email:string)
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Authenticate/getAccountUser?Fullname='+Fullname+'&UserName='+Username+'&Email='+Email,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }
  public lockAccount(id:string)
  {
    return this.httpClient
			.post<any>('https://localhost:7109/api/authenticate/lockaccount?id='+id,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': this.strToken
     })});
		
  }
}
