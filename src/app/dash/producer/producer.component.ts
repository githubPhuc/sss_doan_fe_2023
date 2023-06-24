import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { InsertProducerComponent } from './insert-producer/insert-producer.component';
import { ProducerService } from './producer.service';
import { UpdateProducerComponent } from './update-producer/update-producer.component';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent  implements OnInit {
  closeResult = '';
  constructor(private producerService:ProducerService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    Data:any;
    token!:string;
    tk:any;
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
    this.producerService.GetList("","").subscribe(res=>{
      this.Data=res.acc;
      console.log(this.Data);
    })
      this.title="Directory producer"

     
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertProducerComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Insert Producer'
      }
    });
  }
  public Update(id:number)
  {
    console.log(id)
    this.dialog.open(UpdateProducerComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Update Producer',
        id:id,
      }
    });
    
  }
  
//----------Search from-------------//
  searchForm = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),//0901554061
   
  });
  public Search(form:FormGroup) {
    this.producerService.GetList(form.value.name,form.value.code).subscribe(res=>{
      this.Data=res.acc;
    })
  }
  public delete(id:number)
  {
    if(window.confirm('Do you want to remove this manufacturer with id equal to '+id+' ?'))
    {
      this.producerService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
  public StopCooperating(id:number)
  {
    if(window.confirm('Do you want to Stop/Open cooperating this producer ?'))
    {
      console.log(id);
      this.producerService.StopCooperating(id).subscribe((dataT: { status: any; message: any; }) => {
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
