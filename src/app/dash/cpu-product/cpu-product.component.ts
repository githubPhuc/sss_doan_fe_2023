import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CpuProduct } from './Cpu';
import { CpuService } from './cpu.service';

@Component({
  selector: 'app-cpu-product',
  templateUrl: './cpu-product.component.html',
  styleUrls: ['./cpu-product.component.scss']
})
export class CpuProductComponent implements OnInit {
  closeResult = '';
  constructor(private cpuService:CpuService,
              private toastr:NotifierService,
              private router:Router,
      ) { }
    dataT:any;
    title:any;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
      this.cpuService.GetCpuProducts().subscribe(data => {
        this.dataT=data;
      });
      this.title="Directory Cpu product"

     
  }
  InsertSsdForm = new FormGroup({
    name: new FormControl(''),
    technicalData: new FormControl(''),
    unit: new FormControl(''),
  });
  data=new CpuProduct(0,"","","");
  
  onSubmit(form:FormGroup) {
    console.warn(form.value);
    if(form.value.name==null||form.value.name=='')
    {
      this.toastr.ShowError('Cpu name is null!',' Please check again!');
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
    this.cpuService.PostCpuProducts(this.data).subscribe((dataT: { status: any; message: any; }) => {
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
    if(window.confirm('Do you want to clear this cpu ?'))
    {
      console.log(id);
      this.cpuService.DeleteCpuProducts(id).subscribe((dataT: { status: any; message: any; }) => {
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
