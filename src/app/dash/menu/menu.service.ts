import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menus } from './Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) {   }
  httpOp:any;
  token=localStorage.getItem('token');
  public getMenu()
  {
    return this.httpClient
      .get<any>('https://localhost:7109/api/Menus',{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});

  }
  public Load_User_Menu(userName:any)
  {
    return this.httpClient
      .get<any>('https://localhost:7109/api/User_Menu/Load_User_Menu?userName='+userName,{headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
     })});

  }
  public PostMenu(menu:Menus){
 
    return this.httpClient.post<any>('https://localhost:7109/api/Menus', menu,{headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   })});
  }

}

