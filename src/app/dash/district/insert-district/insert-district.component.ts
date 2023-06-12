import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from '../../city/city.service';
import { DistrictService } from '../district.service';

@Component({
  selector: 'app-insert-district',
  templateUrl: './insert-district.component.html',
  styleUrls: ['./insert-district.component.scss']
})
export class InsertDistrictComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private districtService:DistrictService,
              private cityService:CityService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name
  }
  Data:any;
  ngOnInit(): void {
    this.cityService.getCities("").subscribe(res=>{
      this.Data=res.acc;
      console.log(this.Data);
    })
  }
  InsertForm = new FormGroup({
    NameDistrict: new FormControl(''),
    idCity: new FormControl(''),
  });
  public InsertCity(form:FormGroup) {
    if(form.value.NameDistrict==null||form.value.NameDistrict==''||form.value.NameDistrict=='undefined')
    {
      this.toastr.ShowError('Name District is null!',' Please check again!');
      return;
    }
    if(form.value.idCity==0)
    {
      this.toastr.ShowError('Name District is null!',' Please check again!');
      return;
    }
    this.districtService.PostDistrict(form.value.NameDistrict,form.value.idCity).subscribe((dataT: { status: any; message: any; }) => {
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
