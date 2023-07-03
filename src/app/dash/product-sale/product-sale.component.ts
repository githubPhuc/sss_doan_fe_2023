import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class ProductSaleComponent implements OnInit ,OnDestroy {
  closeResult = '';
  constructor(private productSaleService:ProductSaleService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
      ) { }
    saleData:any;
    title:any;
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.productSaleService.GetListSale().subscribe(res=>{
      this.saleData=res.data;
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
  ngOnDestroy(): void {
    this.saleData.unsubscribe();
  }
}
