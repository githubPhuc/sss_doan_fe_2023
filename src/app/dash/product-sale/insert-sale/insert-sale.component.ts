import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { ProductSaleService } from '../product-sale.service';
import { Sale } from '../Sale';

@Component({
  selector: 'app-insert-sale',
  templateUrl: './insert-sale.component.html',
  styleUrls: ['./insert-sale.component.scss']
})
export class InsertSaleComponent  implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private productSaleService:ProductSaleService,
                                      
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name
                                        }
 
  imgShow:any;
  formData=new FormData();
  file!: File; 
  ngOnInit(): void {
    
  }
  InsertForm = new FormGroup({
    nameSale: new FormControl(''),
    descriptionSale: new FormControl(''),
    marth: new FormControl(''),
    Unit: new FormControl(''),
    status: new FormControl(''),
    idProduct: new FormControl(''),
  });
  dataSale=new Sale(0,"","",0,"",true);
  
  onSubmitInsert(form:FormGroup)
  {
  
    if(form.value.nameSale.length<1)
    {
      this.toastr.ShowError('nameSale cannot be blank!',' Please check again!');
      return;
    }
    this.dataSale.nameSale=form.value.nameSale;
    this.dataSale.descriptionSale=form.value.descriptionSale;
    this.dataSale.marth=form.value.marth;
    this.dataSale.Unit=form.value.Unit;
    this.dataSale.status=true;
    console.log(this.dataSale);
    this.productSaleService.Insert(this.dataSale,0).subscribe((dataT: { status: any; message: any; }) => {
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
