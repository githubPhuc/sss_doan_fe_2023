import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceLoginService } from '../service/service-login.service';
  import { Login } from './login';
import { NotifierService } from '../service/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isEMPTY:boolean=false;
  
  constructor(private httpService: ServiceLoginService,private router:Router,private toastr:NotifierService){}
  ngOnInit() {
  } 
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  data=new Login("","");
  loginSus=true;
  onSubmit(form:FormGroup) {
    if(form.value.username=='')
    {
        this.isEMPTY=true;
        this.toastr.ShowError('Username null!',' Please check again Username!');
        return;
    }
    this.data.username=form.value.username;
    if(form.value.password=='')
    {
        this.isEMPTY=true;
        this.toastr.ShowError('Password null!',' Please check again password!');
        return;
    }
    this.data.password=form.value.password;
    this.httpService.login(this.data).subscribe(data1=>{
      
      if(data1.status==400)
      {
        this.isEMPTY=false;
        this.loginSus=false;
        this.toastr.ShowError('Login fail!',' Please check again username or password!');
        return ;
      }
    
      window.localStorage.setItem('token',data1.token);
      window.localStorage.setItem('userid',data1.id);
      window.localStorage.setItem('phone',data1.phone);
      window.localStorage.setItem('role',data1.role);
      window.localStorage.setItem('username',data1.username);
      window.localStorage.setItem('address',data1.address);
      window.localStorage.setItem('name',data1.name);
      if(data1.role =='Admin')
      {
        this.router.navigate(['/'+'admin/Home']);
      }
      else{
        this.toastr.ShowError('Login fail!','Login fail. User not is admin! ');
      }
    });
    
  }
  // HandleSubmit(){
  //   console.log("this.loginSus");
  //   if(this.loginSus==true)
  //   {
  //     console.log(this.loginSus);
  //     this.toastr.ShowSuccess('Login success','');
  //   }
  // }
 

}

