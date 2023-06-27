import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './Account';

@Injectable({
   providedIn: 'root'
})
export class AccountService {

   constructor(private httpClient: HttpClient) { }


   token = localStorage.getItem('token');
   strToken = 'Bearer ' + this.token;
   public getAccountAdmin(Fullname: string, Username: string, Email: string) {
      return this.httpClient
         .get<any>('https://localhost:7109/api/Authenticate/getAccountAdmin?Fullname=' + Fullname + '&UserName=' + Username + '&Email=' + Email, {
            headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': this.strToken
            })
         });

   }
   public getAccountUser(Fullname: string, Username: string, Email: string) {
      return this.httpClient
         .get<any>('https://localhost:7109/api/Authenticate/getAccountUser?Fullname=' + Fullname + '&UserName=' + Username + '&Email=' + Email, {
            headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': this.strToken
            })
         });

   }
   public GetUserName() {
      return this.httpClient
         .get<any>('https://localhost:7109/api/Authenticate/GetUserName', {
            headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': this.strToken
            })
         });

   }
   public getAccountByUsername(UserName: string) {
      return this.httpClient
         .get<any>('https://localhost:7109/api/Authenticate/getAccountByUsername?UserName=' + UserName, {
            headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': this.strToken
            })
         });

   }
   public lockAccount(UserName: string) {
      return this.httpClient
         .post<any>('https://localhost:7109/api/authenticate/lockaccount?UserName=' + UserName, {
            headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': this.strToken
            })
         });

   }
   public registerAdmin(data: Account) {
      console.log(data);
      return this.httpClient
         .post<any>('https://localhost:7109/api/Authenticate/register-admin', data, {
            headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': this.strToken
            })
         });
   }
   public Update(model: Account, UserName: number) {
      return this.httpClient
         .post<any>('https://localhost:7109/api/Authenticate/editAcountAdmin?UserName=' + UserName, model, {
            headers: new HttpHeaders({
               'Content-Type': 'application/json',
               'Authorization': this.strToken
            })
         });
   }
   public UploadImage(userName: any, data: any) {
      return this.httpClient.post('https://localhost:7109/api/Authenticate/uploadImage?userName=' + userName, data, {
         reportProgress: true,
         observe: 'events',
        
      });
   }
}
