import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { DepotService } from '../../depot/depot.service';
import { ImportDepotService } from '../import-depot.service';
import { ImportBillDepot } from '../ImportDepot';

@Component({
  selector: 'app-insert-import-depot',
  templateUrl: './insert-import-depot.component.html',
  styleUrls: ['../../dash.component.scss']
})
export class InsertImportDepotComponent implements OnInit {

  NameWeb;
  today= new Date();
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private depotService:DepotService,
                                        private importDepotService:ImportDepotService,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name
                                        }
  dataDepot:any;
  username:any;
  isSuccess!:boolean;
  ngOnInit(): void {
    this.username = localStorage.getItem('username')!;
    this.depotService.get("","").subscribe(res=>{
      this.dataDepot=res.acc;
    })
    this.isSuccess=false;
  }
  InsertForm = new FormGroup({
    idDepot: new FormControl(''),
  });
  dataBill=new ImportBillDepot(0,"","",0,0,this.today,this.today,"","","",false); 
  onSubmitInsert(form:FormGroup)
  {
    if(form.value.idDepot==""||form.value.idDepot=="undefined"||form.value.idDepot==null)
    {
      this.toastr.ShowError('idDepot cannot be blank!',' Please check again!');
      return;
    }
    this.dataBill.IdDepot=form.value.idDepot;
    this.dataBill.UserCreate=this.username;
    console.log(this.dataBill);
    this.importDepotService.Insert(this.dataBill).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success"){
          this.toastr.ShowSuccess('Success!',dataT.message);
          location.reload(); 
          this.isSuccess=true;
      
      }
      else{
        this.isSuccess=false;
        this.toastr.ShowError('Error!',dataT.message);
        return;
      }
    });
   
  }
}
