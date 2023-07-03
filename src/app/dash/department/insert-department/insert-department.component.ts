import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-insert-department',
  templateUrl: './insert-department.component.html',
  styleUrls: ['../department.component.scss']
})
export class InsertDepartmentComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private departmentService:DepartmentService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name
  }
  Data:any;
  ngOnInit(): void {
   
  }
  InsertForm = new FormGroup({
    codeDepartment: new FormControl(''),
    nameDepartment: new FormControl(''),
  });
  public InsertCity(form:FormGroup) {
    if(form.value.codeDepartment==null||form.value.codeDepartment==''||form.value.codeDepartment=='undefined'||form.value.codeDepartment.length<3)
    {
      this.toastr.ShowError('Code Department is null or longer than 3 characters!',' Please check again!');
      return;
    }
    if(form.value.nameDepartment.length ==0)
    {
      this.toastr.ShowError('Name Department is null!',' Please check again!');
      return;
    }
    this.departmentService.Insert(form.value.codeDepartment,form.value.nameDepartment).subscribe((dataT: { status: any; message: any; }) => {
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
