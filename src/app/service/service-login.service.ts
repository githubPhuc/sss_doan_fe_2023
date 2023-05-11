import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  constructor(private httpClient: HttpClient) {   }
  public login(data:Login)
  {
    return this.httpClient
    .post<any>('https://localhost:7109/api/authenticate/login',data,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
   })});

  }
}
