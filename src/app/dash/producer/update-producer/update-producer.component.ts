import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from '../../city/city.service';
import { DistrictService } from '../../district/district.service';
import { WardsService } from '../../wards/wards.service';
import { Producer } from '../Producer';
import { ProducerService } from '../producer.service';

@Component({
  selector: 'app-update-producer',
  templateUrl: './update-producer.component.html',
  styleUrls: ['./update-producer.component.scss']
})
export class UpdateProducerComponent  implements OnInit {

  NameWeb;
  id;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private districtService:DistrictService,
                                        private cityService:CityService,
                                        private wardsService:WardsService,
                                        private producerService:ProducerService,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name,
                                          this.id = data.id
                                        }
  dataCity:any;
  dataDistrict:any;
  dataWards:any;
  numDataCity!: number;
  username:any;
  EditProductCode = '';
  imgShow:any;
  isSuccess! :boolean;
  formData=new FormData();
  file!: File; 
  UpdateForm = new FormGroup({
    district: new FormControl(''),
    city: new FormControl(''),
    wards: new FormControl(''),
    codeProduce: new FormControl(''),
    nameProduce: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    location: new FormControl(''),
    Status: new FormControl(''),
  });
  dataProducer=new Producer(0,"","",0,"",0,"",0,"",0,"","",true,"");

  ngOnInit(): void {
    this.cityService.getCities("").subscribe(res=>{
      this.dataCity=res.acc;
    })
    this.producerService.GetListById(this.id).subscribe(res => {
      
      this.UpdateForm.patchValue(res.acc);
      this.imgShow=res.acc.pathLogo;
    })
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
  
  
  onSubmitInsert(form:FormGroup)
  {
    this.isSuccess=false;
    if(form.value.email.length<1)
    {
      this.toastr.ShowError('email is null!',' Please check again!');
      return;
    }
    if(form.value.nameProduce.length<1)
    {
      this.toastr.ShowError('name Produce is null!',' Please check again!');
      return;
  
    }
    if(form.value.phone.length>10||form.value.phone.length<10)
    {
      this.toastr.ShowError('phone number must be 10 characters!',' Please check again!');
      return;
    }
    if(form.value.codeProduce.length>3||form.value.codeProduce.length<3)
    {
      this.toastr.ShowError('Producer code is 3 characters!',' Please check again!');
      return;
    }
    if(form.value.location.length<1)
    {
      this.toastr.ShowError('location is null!!',' Please check again!');
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
    this.dataProducer.nameProduce=form.value.nameProduce;
    this.dataProducer.codeProduce=form.value.codeProduce;
    this.dataProducer.Email=form.value.email;
    this.dataProducer.Phone=form.value.phone;
    this.dataProducer.Location=form.value.location;
    this.dataProducer.idCity=form.value.city;
    this.dataProducer.idWards=form.value.wards;
    this.dataProducer.idDistrict=form.value.district;
    console.log(this.dataProducer);
    let formdata = new FormData();
    formdata.append("file", this.file, this.dataProducer.codeProduce)
    this.producerService.Update(this.dataProducer,this.id).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
        this.producerService.uploadImage( this.dataProducer.codeProduce,formdata).subscribe(result => {
          this.toastr.ShowSuccess('Success!',dataT.message);
        
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
    }
  }
  
}
