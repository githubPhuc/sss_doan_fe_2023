import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss']
})
export class AccountUserComponent implements OnInit {
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
    islogin!:boolean;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.accountService.getAccountUser("","","").subscribe(res=>{
      this.accountData=res.acc;
      console.log(this.accountData);
    })
      this.title="Administrator Account Admin"

     
  }

  

  
//----------Search from-------------//
  searchForm = new FormGroup({
    Username: new FormControl(''),
    Fullname: new FormControl(''),//0901554061
    Email: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.accountService.getAccountUser(form.value.Fullname,form.value.Username,form.value.Email).subscribe(res=>{
      this.accountData=res.acc;
    })
  }
//-----------Lock account-------------//
  public lockAccount(userName:string)
  {
    if(window.confirm('Do you want to lock this account ?'))
    {
      console.log(userName);
      this.accountService.lockAccount(userName).subscribe((dataT: { status: any; message: any; }) => {
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.message);
          this.ngOnInit();
        }
        else{
          this.toastr.ShowError('Error!',dataT.message);
          return;
        }
       
      });    
    }
    
  }
}
