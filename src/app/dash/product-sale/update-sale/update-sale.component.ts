import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { ProductSaleService } from '../product-sale.service';
import { Sale } from '../Sale';

@Component({
  selector: 'app-update-sale',
  templateUrl: './update-sale.component.html',
  styleUrls: ['./update-sale.component.scss']
})
export class UpdateSaleComponent  implements OnInit {

  NameWeb;
  id;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private productSaleService:ProductSaleService,
                                      
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name,
                                          this.id = data.id
                                        }
 
  imgShow:any;
  formData=new FormData();
  file!: File; 
  updateForm = new FormGroup({
    nameSale: new FormControl(''),
    descriptionSale: new FormControl(''),
    marth: new FormControl(''),
    unit: new FormControl(''),
    status: new FormControl(''),
    idProduct: new FormControl(''),
  });
  dataSale=new Sale(0,"","",0,"",true);
  ngOnInit(): void {
    this.productSaleService.GetListSaleByID(this.id).subscribe(res => {
      
      this.updateForm.patchValue(res.data);
      console.log(this.updateForm.value);
      console.log(res);
    })
  }
  
  
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
    this.dataSale.Unit=form.value.unit;
    this.dataSale.status=true;
    console.log(this.dataSale);
    this.productSaleService.Update(this.dataSale,this.id).subscribe((dataT: { status: any; message: any; }) => {
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
