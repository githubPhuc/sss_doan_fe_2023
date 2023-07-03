import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { DepotService } from './depot.service';
import { InsertDepotComponent } from './insert-depot/insert-depot.component';
import { UpdateDepotComponent } from './update-depot/update-depot.component';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent  implements OnInit {
  closeResult = '';
  constructor(private depotService:DepotService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    depotData:any;
    title:any;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.depotService.get("","").subscribe(res=>{
      this.depotData=res.acc;
      console.log(this.depotData);
    })
      this.title="Directory Depot"

     
  }
  _InsertView(){
    this.dialog.open(InsertDepotComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Insert Depot'
      }
    });
  }

  
//----------Search from-------------//
  searchForm = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.depotService.get(form.value.name,form.value.code).subscribe(res=>{
      this.depotData=res.acc;
    })
  }

  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this cpu ?'))
    {
      console.log(id);
      this.depotService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
  public Update(id:number)
  {
    console.log(id)
    this.dialog.open(UpdateDepotComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Update Depot',
        id:id,
      }
    });
    
  }
}
