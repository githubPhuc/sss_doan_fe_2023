import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { DistrictService } from './district.service';
import { InsertDistrictComponent } from './insert-district/insert-district.component';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  closeResult = '';
  constructor(private districtService:DistrictService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    Data:any;
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
    localStorage.getItem('token')!=null?this.islogin=true:this.islogin=false;
    this.username = localStorage.getItem('username')!;
    this.name =localStorage.getItem('name')!;
    this.districtService.getDistrict("").subscribe(res=>{
      this.Data=res.acc;
      console.log(this.Data);
    })
      this.title="Directory District"
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertDistrictComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        witch:2000,
        name : 'Insert District'
      }
    });
  }

  
//----------Search from-------------//
  searchForm = new FormGroup({
    NameDistrict: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.districtService.getDistrict(form.value.NameDistrict).subscribe(res=>{
      this.Data=res.acc;
    })
  }



  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this cpu ?'))
    {
      console.log(id);
      this.districtService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
