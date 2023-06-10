import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { RamProduct } from './Ram';
import { RamService } from './ram.service';

@Component({
  selector: 'app-ram-product',
  templateUrl: './ram-product.component.html',
  styleUrls: ['./ram-product.component.scss']
})
export class RamProductComponent implements OnInit {
  closeResult = '';
  constructor(private ramService:RamService,
              private toastr:NotifierService,
              private router:Router,
      ) { }
    Ramproduct:any;
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
      this.ramService.GetRamProducts().subscribe(data => {
        this.Ramproduct=data;
        this.dataT=data;
      });
      this.title="Directory Ram"

     
  }
  ramForm = new FormGroup({
    nameRam: new FormControl(''),
    technicalData: new FormControl(''),
    unit: new FormControl(''),
  });
  data=new RamProduct(0,"","","");
  
  onSubmit(form:FormGroup) {
    console.warn(form.value);
    if(form.value.nameRam==null||form.value.nameRam=='')
    {
      this.toastr.ShowError('Ram name is null!',' Please check again!');
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
    this.data.nameRam=form.value.nameRam;
    this.data.technicalData=form.value.technicalData;
    this.data.unit=form.value.unit;
    console.log(this.data);
    this.ramService.PostRamProducts(this.data).subscribe((dataT: { status: any; message: any; }) => {
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
    if(window.confirm('Do you want to clear this ram ?'))
    {
      this.ramService.DeleteRamProducts(id).subscribe((dataT: { status: any; message: any; }) => {
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
