import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CityService } from '../city.service';

@Component({
  selector: 'app-insert-city',
  templateUrl: './insert-city.component.html',
  styleUrls: ['../city.component.scss']
})
export class InsertCityComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private cityService:CityService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name
  }

  ngOnInit(): void {
  }
  InsertForm = new FormGroup({
    NameCity: new FormControl(''),
  });
  public InsertCity(form:FormGroup) {
    if(form.value.NameCity==null||form.value.NameCity==''||form.value.NameCity=='undefined')
    {
      this.toastr.ShowError('City name is null!',' Please check again!');
      return;
    }
    this.cityService.PostCity(form.value.NameCity).subscribe((dataT: { status: any; message: any; }) => {
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
