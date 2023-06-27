import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.scss']
})
export class InsertCategoryComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              private categoryService:CategoryService,
              private toastr:NotifierService,
              private router:Router,
          
  
  ) {
    this.NameWeb = data.name
  }

  ngOnInit(): void {
  }
  InsertForm = new FormGroup({
    codeCategory: new FormControl(''),
    nameCategory: new FormControl(''),
  });
  public InsertCity(form:FormGroup) {
    if(form.value.codeCategory==null||form.value.codeCategory==''||form.value.codeCategory=='undefined'|| form.value.codeCategory.length<3)
    {
      this.toastr.ShowError('Code type has no value or String length must be 3!',' Please check again!');
      return;
    }
    if(form.value.nameCategory==null||form.value.nameCategory==''||form.value.nameCategory=='undefined')
    {
      this.toastr.ShowError('Name Category is null!',' Please check again!');
      return;
    }
    this.categoryService.insert(form.value.codeCategory,form.value.nameCategory).subscribe((dataT: { status: any; message: any; }) => {
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
