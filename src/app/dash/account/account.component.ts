import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { Account } from './Account';
import { AccountService } from './account.service';
import { InsertAccountComponent } from './insert/insert.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  closeResult = '';
  constructor(private accountService:AccountService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    accountData:any;
    token!:string;
    tk:any;
    dataT:any;
    title:any;
    [x: string]: any;
    scr:boolean=false;  
    username:any;
    name:any;
    islogin!:boolean;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    localStorage.getItem('token')!=null?this.islogin=true:this.islogin=false;
    this.username = localStorage.getItem('username')!;
    this.name =localStorage.getItem('name')!;
    this.accountService.getAccountAdmin("","","").subscribe(res=>{
      this.accountData=res.acc;
      console.log(this.accountData);
    })
      this.title="Administrator Account Admin"

     
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertAccountComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Insert Account'
      }
    });
  }

  
//----------Search from-------------//
  searchForm = new FormGroup({
    Username: new FormControl(''),
    Fullname: new FormControl(''),//0901554061
    Email: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.accountService.getAccountAdmin(form.value.Fullname,form.value.Username,form.value.Email).subscribe(res=>{
      this.accountData=res.acc;
    })
  }
//-----------Lock account-------------//
  public lockAccount(id:string)
  {
    if(window.confirm('Do you want to lock this account ?'))
    {
      console.log(id);
      this.accountService.lockAccount(id).subscribe((dataT: { status: any; message: any; }) => {
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.message);
          location.reload(); 
        }
        else{
          this.toastr.ShowError('Error!',dataT.message);
          return;
        }
       
      });    
    }
    
  }
}
