import { HttpEventType } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from '../../city/city.service';
import { DepartmentService } from '../../department/department.service';
import { DistrictService } from '../../district/district.service';
import { WardsService } from '../../wards/wards.service';
import { Account } from '../Account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['../account.component.scss']
})
export class InsertAccountComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private districtService:DistrictService,
                                        private cityService:CityService,
                                        private wardsService:WardsService,
                                        private accountService:AccountService,
                                        private departmentService:DepartmentService,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name
                                        }
  dataCity:any;
  dataDistrict:any;
  dataWards:any;
  dataDepartment:any;
  dataAccount:any;
  numDataCity!: number;
  username:any;
  EditProductCode = '';
  imgShow:any;
  isSuccess! :boolean;
  formData=new FormData();
  file!: File; 
  ngOnInit(): void {
    this.accountService.GetUserName().subscribe(res=>{
      this.username=res.acc;
    })
    this.departmentService.GetListComboBox().subscribe(res=>{
      this.dataDepartment=res.data;
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
    Department: new FormControl(''),
    shippingAddress: new FormControl(''),
    Password: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    images: new FormControl(''),
  });
  dataAcc=new Account("","","","",0,"",0,"",0,"","","",false,"","","","");
  
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
    if(form.value.Department.length<1)
    {
      this.toastr.ShowError('Department is null!',' Please check again!');
      return;
    }
    if(form.value.phoneNumber.length>10||form.value.phoneNumber.length<10)
    {
      this.toastr.ShowError('Phone number must be 10 characters!',' Please check again!');
      return;
    }
    if(form.value.fullname.length<1)
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
    if(this.file==null)
    {
      this.toastr.ShowError('Image not null!',' Please check again!');
      return;
    }
    this.dataAcc.username=this.username;
    this.dataAcc.Password=form.value.Password;
    this.dataAcc.email=form.value.email;
    this.dataAcc.phone=form.value.phoneNumber;
    this.dataAcc.fullname=form.value.fullname;
    this.dataAcc.shippingAddress=form.value.shippingAddress;
    this.dataAcc.cyti=form.value.city;
    this.dataAcc.wards=form.value.wards;
    this.dataAcc.district=form.value.district;
    this.dataAcc.idDepartment=form.value.Department;
    console.log(this.dataAcc);
    let formdata = new FormData();
    formdata.append("file", this.file, this.username)
    this.accountService.registerAdmin(this.dataAcc).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {console.log(this.file);
        this.accountService.UploadImage(this.username,formdata).subscribe(result => {
          this.toastr.ShowSuccess('Success!',dataT.message);
          console.log(result);

          // location.reload(); 
        });
      }
      else{
        this.isSuccess==false;
        this.toastr.ShowError('Error!',dataT.message);
        return;
      }
    });
   
  }

  ShowImage(event:any){
    let reader = new FileReader();
    this.file = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
      this.imgShow=reader.result;
      console.log(this.imgShow);
    }
  }
  

}