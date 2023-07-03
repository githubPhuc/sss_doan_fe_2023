import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CardDisplayService } from './card-display.service';
import { InsertCardDisplayComponent } from './insert-card-display/insert-card-display.component';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  closeResult = '';
  constructor(private cardDisplayService:CardDisplayService,
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
    this.cardDisplayService.Get("").subscribe(res=>{
      this.Data=res.acc;
    })
      this.title="Directory Card Display"
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertCardDisplayComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        witch:2000,
        name : 'Insert Card Display'
      }
    });
  }

  
//----------Search from-------------//
  searchForm = new FormGroup({
    Name: new FormControl(''),
  });
  public Search(form:FormGroup) {
    this.cardDisplayService.Get(form.value.Name).subscribe(res=>{
      this.Data=res.acc;
    })
  }



  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this cpu ?'))
    {
      console.log(id);
      this.cardDisplayService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
}
