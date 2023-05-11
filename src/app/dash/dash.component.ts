import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageserviceService } from './page/pageservice.service';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent  implements OnInit{
 
  constructor(private router:Router,private page: PageserviceService) {}
  [x: string]: any;
  scr:boolean=false;  
  txt:any;
  username:any;
  name:any;
  islogin!:boolean;
  lstPage:any;
  
 
  ngOnInit(): void {
    window.onscroll=()=>this.onSCR();
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/admin']);
    }
    localStorage.getItem('token')!=null?this.islogin=true:this.islogin=false;
    this.username = localStorage.getItem('username')!;
    this.name =localStorage.getItem('name')!;
    this.lstPage =this.page.getPage();
    console.log(this.lstPage);
    

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

}
