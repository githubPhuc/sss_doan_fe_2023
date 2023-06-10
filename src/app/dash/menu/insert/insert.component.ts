import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { MenuService } from '../menu.service';
import { Menus } from '../Menu';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  constructor(private menuService:MenuService,
    private toastr:NotifierService,
    private router:Router,) { }   
menuData:any;
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
  localStorage.getItem('token')!=null?this.islogin=true:this  .islogin=false;
  this.username = localStorage.getItem('username')!;
  this.name =localStorage.getItem('name')!;
  this.title="Danh mục menu"


  }
  _View() {
    this.router.navigate(['/admin/Menu']);
  }
  InsertForm = new FormGroup({
    Menu_Name: new FormControl(''),
    parentId: new FormControl(''),
    oder_no: new FormControl(''),
    icon: new FormControl(''),
  });
  myDate = new Date();
  data=new Menus(0,"",0,0,"","","",this.myDate,this.myDate);
  
  onSubmit(form:FormGroup) {
    
    if(form.value.Menu_Name==null||form.value.Menu_Name=='')
    {
      this.toastr.ShowError('Menu name is null!',' Please check again!');
      return;
    }
    if(form.value.parentId==null||form.value.parentId=='')
    {
      this.toastr.ShowError('ParentId is null!',' Please check again!');
      return;
    }
    if(form.value.oder_no==null||form.value.oder_no=='')
    {
      this.toastr.ShowError('Oder_no is null!',' Please check again!');
      return;
    }
    if(form.value.icon==null||form.value.icon=='')
    {
      this.toastr.ShowError('Icon is null!',' Please check again!');
      return;
    }
    this.data.menu_Name=form.value.Menu_Name;
    this.data.oder_no=form.value.oder_no;
    this.data.ParentId=form.value.parentId;
    this.data.Icon=form.value.icon;
    this.data.IdUsercreate=this.username;
    this.data.IdUserupdate=this.username;
    this.data.Created=this.myDate;
    this.data.Updated=this.myDate;
    this.menuService.PostMenu(this.data).subscribe((dataT: { status: any; Message: any; }) => {
      console.log(dataT.Message+"||"+dataT.status);
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.Message);
          location.reload(); 
        }
        else{
          this.toastr.ShowError('Error!',dataT.Message);
          return;
        }
       
      });       
  }

}
