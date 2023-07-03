import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CardDisplayService } from '../card-display.service';

@Component({
  selector: 'app-insert-card-display',
  templateUrl: './insert-card-display.component.html',
  styleUrls: ['../card-display.component.scss']
})
export class InsertCardDisplayComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private cardDisplayService:CardDisplayService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name
  }

  ngOnInit(): void {
  }
  InsertForm = new FormGroup({
    Name: new FormControl(''),
    TechnicalData: new FormControl(''),
  });
  public InsertCity(form:FormGroup) {
    console.warn(form.value);
    if(form.value.Name==null||form.value.Name==''||form.value.Name=='undefined')
    {
      this.toastr.ShowError('Name is null!',' Please check again!');
      return;
    }
    if(form.value.TechnicalData==null||form.value.TechnicalData==''||form.value.TechnicalData=='undefined')
    {
      this.toastr.ShowError('Technical data is null!',' Please check again!');
      return;
    }
    this.cardDisplayService.Post(form.value.Name,form.value.TechnicalData).subscribe((dataT: { status: any; message: any; }) => {
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
