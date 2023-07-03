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
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['../product.component.scss']
})
export class InsertProductComponent implements OnInit {

  NameWeb;
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
                                          this.NameWeb = data.name
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
  ngOnInit(): void {
    this.ramService.GetRamProducts().subscribe(data=>{
      this.dataRam=data;
    });
    this.ssdService.GetSsdProduct().subscribe(data=>{
      this.dataSsd=data;
    });
    this.displayService.GetDisplayProducts().subscribe(data=>{
      this.dataDisplay=data;
    });
    this.producerService.GetList("","").subscribe(res=>{
      this.dataProducer=res.acc;
    });
    this.cpuService.GetCpuProducts().subscribe(data=>{
      this.dataCpu=data;
    });
    this.cardDisplayService.Get("").subscribe(res=>{
      this.dataCardDisplay=res.acc;
    });
    this.colorService.GetColorProducts().subscribe(data=>{
      this.dataColor=data;
    });
    this.categoryService.GetList("").subscribe(res=>{
      this.dataCategory=res.acc;
    });
    // this.productSaleService.GetListSale().subscribe(res=>{
    //   this.dataSale=res.data;
    //   console.log(this.dataSale);
    // });
  }
 
  InsertForm = new FormGroup({
    nameProduct: new FormControl(''),
    Description: new FormControl(''),
    idCategory: new FormControl(''),
    idProducer: new FormControl(''),
    nameProduce: new FormControl(''),
    price: new FormControl(''),
    RamProduct: new FormControl(''),
    SSDProduct: new FormControl(''),
    CPUProduct: new FormControl(''),
    DisplayProduct: new FormControl(''),
    CardDisplay: new FormControl(''),
    ColorProduct: new FormControl(''),
    portConnection: new FormControl(''),
    MainProduct: new FormControl(''),
    AccessoriesIncluded: new FormControl(''),
  });
  dataInsert=new Product(0,"","","",0,"",0,"",0,0,"",0,"",0,"",0,"",0,"",0,"","","","",true,true,0);
  
  onSubmitInsert(form:FormGroup)
  {
    this.isSuccess=false;
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
    if(form.value.RamProduct.length<1)
    {
      this.toastr.ShowError('RamProduct is null!',' Please check again!');
      return;
    }
    if(form.value.SSDProduct.length<1)
    {
      this.toastr.ShowError('SSDProduct is null!',' Please check again!');
      return;
    }
    if(form.value.CPUProduct.length<1)
    {
      this.toastr.ShowError('CPUProduct is null!',' Please check again!');
      return;
    }
    if(form.value.DisplayProduct.length<1)
    {
      this.toastr.ShowError('Display Product is null!',' Please check again!');
      return;
    }
    if(form.value.CardDisplay.length<1)
    {
      this.toastr.ShowError('Card Display is null!',' Please check again!');
      return;
    }
    if(form.value.ColorProduct.length<1)
    {
      this.toastr.ShowError('Color Product is null!',' Please check again!');
      return;
    }
    if(form.value.portConnection.length<1)
    {
      this.toastr.ShowError('portConnection is null!',' Please check again!');
      return;
    }
    if(form.value.MainProduct.length<1)
    {
      this.toastr.ShowError('MainProduct is null!',' Please check again!');
      return;
    }
    this.dataInsert.nameProduct=form.value.nameProduct;
    this.dataInsert.RamProduct=form.value.RamProduct;
    this.dataInsert.CPUProduct=form.value.CPUProduct;
    this.dataInsert.SSDProduct=form.value.SSDProduct;
    this.dataInsert.idCategory=form.value.idCategory;
    this.dataInsert.idProducer=form.value.idProducer;
    this.dataInsert.price=form.value.price;
    this.dataInsert.ColorProduct=form.value.ColorProduct;
    this.dataInsert.CardDisplay=form.value.CardDisplay;
    this.dataInsert.DisplayProduct=form.value.DisplayProduct;
    this.dataInsert.portConnection=form.value.portConnection;
    this.dataInsert.AccessoriesIncluded=form.value.AccessoriesIncluded;
    this.dataInsert.MainProduct=form.value.MainProduct;
    this.productService.Insert(this.dataInsert).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
          location.reload();
          return this.toastr.ShowSuccess('Success!',dataT.message);
      }
      else{
        return this.toastr.ShowError('Error!',dataT.message);
      }
    });
  };

}
