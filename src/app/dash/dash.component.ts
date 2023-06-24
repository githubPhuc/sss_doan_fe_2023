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

      if (typeof window.orientation == 'undefined') {
        if (this.getCookie('openMenu') != null) {
          var a= document.getElementById('bodyApp');
            if (this.getCookie('openMenu') == 'close') {
              
               a!.setAttribute('class','sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm sidebar-collapse');
            } else {
              a!.setAttribute('class', 'sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm');
            }
        } else {
          document.getElementById('bodyApp')!.setAttribute('class', 'sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm sidebar-collapse');
            this.setCookie('openMenu', 'close', 365);
        }
    }
    
  }
  openClick(){
    if (typeof window.orientation == 'undefined') {
      if (this.getCookie('openMenu') != null) {
          if (this.getCookie('openMenu') == 'close') {
              console.log('open');
              document.getElementById('bodyApp')!.setAttribute('class', 'sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm sidebar-collapse');
              this.setCookie('openMenu', 'open', 365);
          } else {
              console.log('close');
              document.getElementById('bodyApp')!.setAttribute('class', 'sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm');
              this.setCookie('openMenu', 'close', 365);
          }
      } else {
          console.log('null');
          document.getElementById('bodyApp')!.setAttribute('class', 'sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed text-sm sidebar-collapse');
          this.setCookie('openMenu', 'close', 365);
      }
  }
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
  dropDepot()
  {
    var a= document.getElementById('Depot');
    var b =document.getElementById('downDepot');
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
  // formatColLi(){

  //   let li = document.getElementsByTagName("li");

  //   $("li").removeClass("click");
  //       // Thêm Class
	// 	$(this).addClass("click");
  // }
  public logOut()
  {
    
    this.router.navigate(['/Login']);

  }
  public setCookie(name:any, value:any, days:any) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
 getCookie(name:any) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
 eraseCookie(name:any) {
  document.cookie = name + '=; Max-Age=-99999999;';
}
  

}
