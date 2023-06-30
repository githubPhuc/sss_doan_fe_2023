import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { CardDisplayService } from '../../card-display/card-display.service';
import { CardDisplay } from '../../card-display/CardDisplay';
import { CategoryService } from '../../category-product/category.service';
import { ColorService } from '../../color-product/color.service';
import { CpuService } from '../../cpu-product/cpu.service';
import { DisplayService } from '../../display-product/display.service';
import { ProducerService } from '../../producer/producer.service';
import { ProductSaleService } from '../../product-sale/product-sale.service';
import { RamService } from '../../ram-product/ram.service';
import { SsdService } from '../../ssd-product/ssd.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  NameWeb;
  id;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        private ramService:RamService,
                                        private ssdService:SsdService,
                                        private displayService:DisplayService,
                                        private producerService:ProducerService,
                                        private productService:ProductService,
                                        private cpuService:CpuService,
                                        private cardDisplayService:CardDisplayService,
                                        private colorService:ColorService,
                                        private categoryService:CategoryService,
                                        private productSaleService:ProductSaleService,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name;
                                          this.id=data.id;
                                        }
  dataRam:any;
  dataSsd:any;
  dataDisplay:any;
  dataProducer:any;
  dataCpu:any;
  dataCardDisplay:any;
  dataColor:any;
  dataCategory:any;
  dataSale:any;
  username:any;
  EditProductCode = '';
  imgShow:any;
  isSuccess! :boolean;
  formData=new FormData();
  file!: File; 
  UpdateForm = new FormGroup({
    nameProduct: new FormControl(''),
    description: new FormControl(''),
    idCategory: new FormControl(''),
    idProducer: new FormControl(''),
    nameProduce: new FormControl(''),
    price: new FormControl(''),
    ramProduct: new FormControl(''),
    ssdProduct: new FormControl(''),
    cpuProduct: new FormControl(''),
    displayProduct: new FormControl(''),
    cardDisplay: new FormControl(''),
    colorProduct: new FormControl(''),
    portConnection: new FormControl(''),
    mainProduct: new FormControl(''),
    accessoriesIncluded: new FormControl(''),
    idSale: new FormControl(''),
  });
  dataUpdate=new Product(0,"","","",0,"",0,"",0,0,"",0,"",0,"",0,"",0,"",0,"","","","",true,true,0);
  ngOnInit(): void {
    this.productService.GetProductById(this.id).subscribe(res => {
      
      this.UpdateForm.patchValue(res.data);
      console.log(this.UpdateForm.value);
      console.log(res);
    })
    this.ramService.GetRamProducts().subscribe(data=>{
      this.dataRam=data;
    })
 
    this.ssdService.GetSsdProduct().subscribe(data=>{
      this.dataSsd=data;
      console.log(this.dataSsd);
    })
    this.displayService.GetDisplayProducts().subscribe(data=>{
      this.dataDisplay=data;
      console.log(this.dataDisplay);
    })
    this.producerService.GetList("","").subscribe(res=>{
      this.dataProducer=res.acc;
     
    })
    this.cpuService.GetCpuProducts().subscribe(data=>{
      this.dataCpu=data;
    })
    this.cardDisplayService.Get("").subscribe(res=>{
      this.dataCardDisplay=res.acc;
    })
    this.colorService.GetColorProducts().subscribe(data=>{
      this.dataColor=data;
    })
    this.categoryService.GetList("").subscribe(res=>{
      this.dataCategory=res.acc;
     
    })
    this.productSaleService.GetListSale().subscribe(res=>{
      this.dataSale=res.data;
     
    })
  }
 
  
  
  onSubmitUpdate(form:FormGroup)
  {
    this.isSuccess=false;
    console.warn(form.value);
    if(form.value.nameProduct.length<1)
    {
      this.toastr.ShowError('name Produce is null!',' Please check again!');
      return;
  
    }
    if(form.value.idCategory.length<1)
    {
      this.toastr.ShowError('Category is null!',' Please check again!');
      return;
    }
    if(form.value.idProducer.length<1)
    {
      this.toastr.ShowError('Producer is null!',' Please check again!');
      return;
    }
    if(form.value.price.length<1)
    {
      this.toastr.ShowError('price is null!',' Please check again!');
      return;
    }
    if(form.value.ramProduct.length<1)
    {
      this.toastr.ShowError('RamProduct is null!',' Please check again!');
      return;
    }
    if(form.value.ssdProduct.length<1)
    {
      this.toastr.ShowError('SSDProduct is null!',' Please check again!');
      return;
    }
    if(form.value.cpuProduct.length<1)
    {
      this.toastr.ShowError('CPUProduct is null!',' Please check again!');
      return;
    }
    if(form.value.displayProduct.length<1)
    {
      this.toastr.ShowError('Display Product is null!',' Please check again!');
      return;
    }
    if(form.value.cardDisplay.length<1)
    {
      this.toastr.ShowError('Card Display is null!',' Please check again!');
      return;
    }
    if(form.value.colorProduct.length<1)
    {
      this.toastr.ShowError('Color Product is null!',' Please check again!');
      return;
    }
    if(form.value.portConnection.length<1)
    {
      this.toastr.ShowError('portConnection is null!',' Please check again!');
      return;
    }
    if(form.value.mainProduct.length<1)
    {
      this.toastr.ShowError('MainProduct is null!',' Please check again!');
      return;
    }
    if(form.value.idSale.length<1)
    {
      this.toastr.ShowError('idSale is null!',' Please check again!');
      return;
    }
   
   
   
    
    this.dataUpdate.nameProduct=form.value.nameProduct;
    this.dataUpdate.RamProduct=form.value.ramProduct;
    this.dataUpdate.CPUProduct=form.value.cpuProduct;
    this.dataUpdate.SSDProduct=form.value.ssdProduct;
    this.dataUpdate.idCategory=form.value.idCategory;
    this.dataUpdate.idProducer=form.value.idProducer;
    this.dataUpdate.price=form.value.price;
    this.dataUpdate.ColorProduct=form.value.colorProduct;
    this.dataUpdate.CardDisplay=form.value.cardDisplay;
    this.dataUpdate.DisplayProduct=form.value.displayProduct;
    this.dataUpdate.portConnection=form.value.portConnection;
    this.dataUpdate.AccessoriesIncluded=form.value.accessoriesIncluded;
    this.dataUpdate.MainProduct=form.value.mainProduct;
    this.dataUpdate.idSale=form.value.idSale;
    console.log(this.dataUpdate);
    this.productService.Update(this.dataUpdate,this.id).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
          this.toastr.ShowSuccess('Success!',dataT.message);
          location.reload();
       
      }
      else{
        this.isSuccess==false;
        this.toastr.ShowError('Error!',dataT.message);
        return;
      }
    });
   
  }
}
