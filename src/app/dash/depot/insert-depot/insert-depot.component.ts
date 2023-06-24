import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from '../../city/city.service';
import { DistrictService } from '../../district/district.service';
import { WardsService } from '../../wards/wards.service';
import { Depot } from '../Depot';
import { DepotService } from '../depot.service';

@Component({
  selector: 'app-insert-depot',
  templateUrl: './insert-depot.component.html',
  styleUrls: ['./insert-depot.component.scss']
})
export class InsertDepotComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private districtService:DistrictService,
                                        private depotService:DepotService,
                                        private cityService:CityService,
                                        private wardsService:WardsService,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name
                                        }
  dataCity:any;
  dataDistrict:any;
  dataWards:any;
  numDataCity!: number;
  EditProductCode = '';
  imgShow:any;
  isSuccess! :boolean;
  formData=new FormData();
  file!: File; 
  ngOnInit(): void {
    
  }
  InsertForm = new FormGroup({
    codeDepot: new FormControl(''),
    Location: new FormControl(''),
    nameDepot: new FormControl(''),
    Phone: new FormControl(''),
    storekeepers: new FormControl(''),
  });
  dataDepot=new Depot(0,"","","","","",true);
  
  onSubmitInsert(form:FormGroup)
  {
    this.isSuccess=false;
    if(form.value.codeDepot.length!=3)
    {
      this.toastr.ShowError('String length must be equal to 3!',' Please check again!');
      return;
    }
    if(form.value.Phone.length>10||form.value.Phone.length<10)
    {
      this.toastr.ShowError('Phone number must be 10 characters!',' Please check again!');
      return;
    }
    if(form.value.nameDepot.length<1)
    {
      this.toastr.ShowError('Name cannot be blank!',' Please check again!');
      return;
    }
    if(form.value.Location==""||form.value.Location=="undefined"||form.value.Location==null)
    {
      this.toastr.ShowError('Location cannot be blank!',' Please check again!');
      return;
    }
    if(form.value.storekeepers==""||form.value.storekeepers=="undefined"||form.value.storekeepers==null)
    {
      this.toastr.ShowError('Storekeepers cannot be blank!',' Please check again!');
      return;
    }
    this.dataDepot.codeDepot=form.value.codeDepot;
    this.dataDepot.Location=form.value.Location;
    this.dataDepot.nameDepot=form.value.nameDepot;
    this.dataDepot.Phone=form.value.Phone;
    this.dataDepot.storekeepers=form.value.storekeepers;
    console.log(this.dataDepot);
    this.depotService.Post(this.dataDepot).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
          this.toastr.ShowSuccess('Success!',dataT.message);
          location.reload(); 
      }
      else{
        this.isSuccess==false;
        this.toastr.ShowError('Error!',dataT.message);
        return;
      }
    });
   
  }
}
