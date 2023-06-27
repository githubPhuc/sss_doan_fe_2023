import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { InsertSaleComponent } from './insert-sale/insert-sale.component';
import { ProductSaleService } from './product-sale.service';
import { UpdateSaleComponent } from './update-sale/update-sale.component';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.scss']
})
export class ProductSaleComponent implements OnInit {
  closeResult = '';
  constructor(private productSaleService:ProductSaleService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    saleData:any;
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
    this.productSaleService.GetListSale().subscribe(res=>{
      this.saleData=res.data;
      console.log(this.saleData);
    })
      this.title="Directory Sale"

     
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertSaleComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Insert Sale'
      }
    });
  }

  

  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this Sale ?'))
    {
      console.log(id);
      this.productSaleService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
  public Update(id:number)
  {
    console.log(id)
    this.dialog.open(UpdateSaleComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Update Depot',
        id:id,
      }
    });
    
  }
}
