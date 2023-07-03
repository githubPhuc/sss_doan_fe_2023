import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { SsdProduct } from './Ssd';
import { SsdService } from './ssd.service';

@Component({
  selector: 'app-ssd-product',
  templateUrl: './ssd-product.component.html',
  styleUrls: ['./ssd-product.component.scss']
})
export class SsdProductComponent implements OnInit {
  closeResult = '';
  constructor(private ssdService:SsdService,
              private toastr:NotifierService,
              private router:Router,
      ) { }
    Ssdproduct:any;
    title:any;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
      this.ssdService.GetSsdProduct().subscribe(data => {
        this.Ssdproduct=data;
      });
      this.title="Directory Rom"

     
  }
  InsertSsdForm = new FormGroup({
    name: new FormControl(''),
    technicalData: new FormControl(''),
    unit: new FormControl(''),
  });
  data=new SsdProduct(0,"","","");
  
  onSubmit(form:FormGroup) {
    console.warn(form.value);
    if(form.value.name==null||form.value.name=='')
    {
      this.toastr.ShowError('SSD name is null!',' Please check again!');
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
    this.ssdService.PostSsdProduct(this.data).subscribe((dataT: { status: any; message: any; }) => {
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

  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this ssd?'))
    {
      this.ssdService.DeleteSsdProduct(id).subscribe((dataT: { status: any; message: any; }) => {
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
