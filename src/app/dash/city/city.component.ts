import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from './city.service';
import { InsertCityComponent } from './insert-city/insert-city.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  closeResult = '';
  constructor(private cityService:CityService,
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
    this.cityService.getCities("").subscribe(res=>{
      this.Data=res.acc;
      console.log(this.Data);
    })
      this.title="Directory City"
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertCityComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        witch:2000,
        name : 'Insert City'
      }
    });
  }

  
//----------Search from-------------//
  searchForm = new FormGroup({
    NameCity: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.cityService.getCities(form.value.NameCity).subscribe(res=>{
      this.Data=res.acc;
    })
  }



  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this cpu ?'))
    {
      console.log(id);
      this.cityService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
