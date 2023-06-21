import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from '../../city/city.service';
import { DistrictService } from '../../district/district.service';
import { WardsService } from '../../wards/wards.service';
import { Account } from '../Account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertAccountComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private districtService:DistrictService,
                                        private cityService:CityService,
                                        private wardsService:WardsService,
                                        private accountService:AccountService,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name
                                        }
  dataCity:any;
  dataDistrict:any;
  dataWards:any;
  dataAccount:any;
  numDataCity!: number;
  Username:any;
  imgShow:any;
  isSuccess! :boolean;
  formData=new FormData();
  fileToUpload:any
  fileName:any;
  ngOnInit(): void {
    this.accountService.GetUserName().subscribe(res=>{
      this.Username=res.acc;
    })
    this.cityService.getCities("").subscribe(res=>{
      this.dataCity=res.acc;
    })
    this.imgShow=" No-Image.png";
  }
  onChangeCity(event:any){
    this.numDataCity=event;
    this.districtService.LoadOnCity(event).subscribe(res=>{
      this.dataDistrict=res.acc;
    })
  }
  onChangeDistrict(event:any){
    this.wardsService.GetWardOnDistrictAndCity(this.numDataCity,event).subscribe(res=>{
      this.dataWards=res.acc;
      console.log(this.dataWards);
    })
  }
  InsertForm = new FormGroup({
    NameWard: new FormControl(''),
    district: new FormControl(''),
    city: new FormControl(''),
    wards: new FormControl(''),
    userName: new FormControl(''),
    fullname: new FormControl(''),
    accoutType: new FormControl(''),
    shippingAddress: new FormControl(''),
    Password: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    images: new FormControl(''),
  });
  dataAcc=new Account("","","",0,"",0,"",0,"","","",false,"","","","");
  
  onSubmitInsert(form:FormGroup)
  {
    this.isSuccess=false;
    if(form.value.email.length<1)
    {
      this.toastr.ShowError('email is null!',' Please check again!');
      return;
    }
    if(form.value.Password.length<3)
    {
      this.toastr.ShowError('Passwords longer than 3 characters!',' Please check again!');
      return;
  
    }
    if(form.value.phone.length>10||form.value.phone.length<10)
    {
      this.toastr.ShowError('Phone number must be 10 characters!',' Please check again!');
      return;
    }
    if(form.value.fullName.length<1)
    {
      this.toastr.ShowError('Name cannot be blank!',' Please check again!');
      return;
    }
    if(form.value.city==""||form.value.city=="undefined"||form.value.city==null)
    {
      this.toastr.ShowError('City cannot be blank!',' Please check again!');
      return;
    }
    if(form.value.wards==""||form.value.wards=="undefined"||form.value.wards==null)
    {
      this.toastr.ShowError('Wards cannot be blank!',' Please check again!');
      return;
    }
    if(form.value.district==""||form.value.district=="undefined"||form.value.district==null)
    {
      this.toastr.ShowError('District cannot be blank!',' Please check again!');
      return;
    }
    console.log('data',form.value);

    this.dataAcc.userName=form.value.username;
    this.dataAcc.Password=form.value.password;
    this.dataAcc.email=form.value.email;
    this.dataAcc.phoneNumber=form.value.phone;
    this.dataAcc.fullname=form.value.fullName;
    this.dataAcc.shippingAddress=form.value.shippingAddress;
    this.dataAcc.city=form.value.city;
    this.dataAcc.wards=form.value.wards;
    this.dataAcc.district=form.value.district;
    this.accountService.registerAdmin(this.dataAccount).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
        this.isSuccess==true;
      }
      else{
        this.isSuccess==false;
      }
    })
    if(this.isSuccess){
      this.formData.append('ImageFile', this.fileToUpload, this.fileName);
      this.accountService.uploadImage(this.dataAcc.userName,this.formData).subscribe((dataT: { status: any; message: any; }) => {
        if(dataT.status=="Success")
        {
          this.toastr.ShowSuccess('Success!',dataT.message);
          location.reload(); 
        }
        else{
          this.toastr.ShowError('Error!',dataT.message);
          return;
        }
      })
    }
    else{
      this.toastr.ShowError('Error!',"Data error, please check again");
      return;
    }
  }
  UploadImage(event:any){
    console.log(event);
    let reader = new FileReader();
    reader.readAsDataURL(event.target.file[0]);
    reader.onload=()=>{
      this.imgShow=reader.result;
    }

  }

}