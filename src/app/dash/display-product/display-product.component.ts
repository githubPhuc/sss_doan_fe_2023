import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { DisplayProduct } from './display';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {
  closeResult = '';
  constructor(private displayService:DisplayService,
              private toastr:NotifierService,
              private router:Router,
      ) { }
    displayproduct:any;
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
      this.displayService.GetDisplayProducts().subscribe(data => {
        this.displayproduct=data;
        this.dataT=data;
      });
      this.title="Directory display product"

     
  }
  InsertSsdForm = new FormGroup({
    name: new FormControl(''),
    technicalData: new FormControl(''),
    unit: new FormControl(''),
  });
  data=new DisplayProduct(0,"","","");
  
  onSubmit(form:FormGroup) {
    console.warn(form.value);
    if(form.value.name==null||form.value.name=='')
    {
      this.toastr.ShowError('Display name is null!',' Please check again!');
      return;
    }
    if(form.value.technicalData==null||form.value.technicalData=='')
    {
      this.toastr.ShowError('Technical Data is null!',' Please check again!');
      return;
    }
    if(form.value.unit==null||form.value.unit=='')
    {
      this.toastr.ShowError('Unit is null!',' Please check again!');
      return;
    }
    this.data.name=form.value.name;
    this.data.technicalData=form.value.technicalData;
    this.data.unit=form.value.unit;
    this.displayService.PostDisplayProducts(this.data).subscribe((dataT: { status: any; message: any; }) => {
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

  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this display ?'))
    {
      this.displayService.DeleteDisplayProducts(id).subscribe((dataT: { status: any; message: any; }) => {
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
