import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from '../../city/city.service';
import { DistrictService } from '../../district/district.service';
import { WardsService } from '../wards.service';

@Component({
  selector: 'app-insert-wards',
  templateUrl: './insert-wards.component.html',
  styleUrls: ['./insert-wards.component.scss']
})
export class InsertWardsComponent  implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private districtService:DistrictService,
              private cityService:CityService,
              private wardsService:WardsService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name
  }
  Data:any;
  District:any;
  ngOnInit(): void {
    this.cityService.getCities("").subscribe(res=>{
      this.Data=res.acc;
    })
    
  }
  onChange(event:any){
    this.districtService.LoadOnCity(event).subscribe(res=>{
      this.District=res.acc;
      console.log(this.District);
    })
  }

  InsertForm = new FormGroup({
    NameWard: new FormControl(''),
    IdDistrict: new FormControl(''),
    IdCity: new FormControl(''),
  });
  public InsertCity(form:FormGroup) {
    if(form.value.NameWard==null||form.value.NameWard==''||form.value.NameWard=='undefined')
    {
      this.toastr.ShowError('Name Ward is null!',' Please check again!');
      return;
    }
    if(form.value.IdCity==0)
    {
      this.toastr.ShowError('Id City is null!',' Please check again!');
      return;
    }
    if(form.value.IdDistrict==0)
    {
      this.toastr.ShowError('Id District is null!',' Please check again!');
      return;
    }
    console.warn(form.value);
    this.wardsService.PostWards(form.value.NameWard,form.value.IdDistrict,form.value.IdCity).subscribe((dataT: { status: any; message: any; }) => {
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
