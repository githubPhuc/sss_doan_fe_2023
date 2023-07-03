import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { DetailImportDepotComponent } from './detail-import-depot/detail-import-depot.component';
import { ImportDepotService } from './import-depot.service';
import { InsertImportDepotComponent } from './insert-import-depot/insert-import-depot.component';

@Component({
  selector: 'app-import-depot',
  templateUrl: './import-depot.component.html',
  styleUrls: ['./import-depot.component.scss']
})
export class ImportDepotComponent  implements OnInit {
  closeResult = '';
  constructor(private importDepotService:ImportDepotService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    Data:any;
    title:any;
    username:any;
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.username = localStorage.getItem('username')!;
    this.importDepotService.GetList("","").subscribe(res=>{
      this.Data=res.acc;
      console.log(this.Data);
    })
      this.title="Import bill depot"

     
  }

 
  
//----------Search from-------------//
  searchForm = new FormGroup({
    codeBill: new FormControl(''),
    nameDepot: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.importDepotService.GetList(form.value.codeBill,form.value.nameDepot).subscribe(res=>{
      this.Data=res.acc;
    })
  }
_InsertView(){
  this.dialog.open(InsertImportDepotComponent,{
    data : {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '600ms',
      name : 'Insert Import Depot'
    }
  });
}
public detail(id:number)
{
  console.log(id)
  this.dialog.open(DetailImportDepotComponent,{
    data : {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '600ms',
      name : 'Detail import bill depot',
      id:id,
    }
  });
  
}

public delete(id:number)
{
  if(window.confirm('Do you want to remove this bill with id equal to'+id+' ?'))
  {
    this.importDepotService.DeleteBill(id).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
        this.toastr.ShowSuccess('Success!',dataT.message);
       this.ngOnInit();
      }
      else{
        this.toastr.ShowError('Error!',dataT.message);
        return;
      }
     
    });    
  }
  
}
public acceptance(id:number)
{
  if(window.confirm('Do you want to acceptance this bill ?'))
  {
    console.log(id);
    this.importDepotService.acceptance(id,this.username).subscribe((dataT: { status: any; message: any; }) => {
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
