import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { DepartmentService } from './department.service';
import { InsertDepartmentComponent } from './insert-department/insert-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent  implements OnInit {
  closeResult = '';
  constructor(private departmentService:DepartmentService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    Data:any;
    title:any;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.departmentService.GetList("").subscribe(res=>{
      this.Data=res.data;
    })
      this.title="Directory District"
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertDepartmentComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        witch:2000,
        name : 'Insert Department'
      }
    });
  }

  
//----------Search from-------------//
  searchForm = new FormGroup({
    nameDepartment: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.departmentService.GetList(form.value.nameDepartment).subscribe(res=>{
      this.Data=res.acc;
    })
  }



  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this cpu ?'))
    {
      console.log(id);
      this.departmentService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
