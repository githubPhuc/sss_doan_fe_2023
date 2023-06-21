import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './Account';

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
  public GetUserName()
  {
    return this.httpClient
			.get<any>('https://localhost:7109/api/Authenticate/GetUserName',{headers: new HttpHeaders({ 
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
  public registerAdmin(data:Account)
   {
    return this.httpClient
    .post<any>('https://localhost:7043/api/authenticate/register-admin',data,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
     
   })});
   }
   public uploadImage(userName:any,data:FormData)
   {
    return this.httpClient
    .post<any>('https://localhost:7109/api/Authenticate/uploadImage?userName='+userName,data,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': this.strToken
   })});
   }
}
