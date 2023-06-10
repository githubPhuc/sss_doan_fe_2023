import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from '../service/notifier.service';
import { MenuService } from './menu/menu.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent  implements OnInit{
 
  constructor(private router:Router,private menu: MenuService,private toastr:NotifierService,) {}
  [x: string]: any;
  scr:boolean=false;  
  username:any;
  name:any;
  islogin!:boolean;
  
  
 
  ngOnInit(): void {
      window.onscroll=()=>this.onSCR();
      if(localStorage.getItem('role')!='Admin')
      {
        this.router.navigate(['/Login']);
      }
      localStorage.getItem('token')!=null?this.islogin=true:this.islogin=false;
      this.username = localStorage.getItem('username')!;
      this.name =localStorage.getItem('name')!;
      
    
  }
  
  drop()
  {
    var a= document.getElementById('test');
    var b =document.getElementById('icon-inv');
    if(a?.getAttribute('style')=='display: none;')
    {
      a.setAttribute('style','display: block;');
      b?.setAttribute('class','fa fa-angle-up')
    }else
    {
      a?.setAttribute('style','display: none;');
      b?.setAttribute('class','fa fa-angle-down')
    }
  }
  dropDirectory()
  {
    var a= document.getElementById('Directory');
    var b =document.getElementById('downDirectory');
    if(a?.getAttribute('style')=='display: none;')
    {
      a.setAttribute('style','display: block;');
      b?.setAttribute('class','fa fa-angle-up')
    }else
    {
      a?.setAttribute('style','display: none;');
      b?.setAttribute('class','fa fa-angle-down')
    }
  }
  dropLogout()
  {
    var a= document.getElementById('log');
    var b =document.getElementById('clickLog');
    if(a?.getAttribute('style')=='display: none;')
    {
      a.setAttribute('style','display: block;');
      b?.setAttribute('class','fa fa-angle-up')
    }else
    {
      a?.setAttribute('style','display: none;');
      b?.setAttribute('class','fa fa-angle-down')
    }
  }
  onSCR()
  {
    if(document.documentElement.scrollTop>400)
    {
      
      this.scr=true;
    }else
    {
      this.scr=false;
    }

  }
  public logOut()
  {
    
    this.router.navigate(['/Login']);

  }
  

}
