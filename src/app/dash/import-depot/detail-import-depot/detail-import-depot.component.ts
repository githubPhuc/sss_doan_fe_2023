import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifierService } from 'src/app/service/notifier.service';
import { ProductService } from '../../product/product.service';
import { ImportDepotService } from '../import-depot.service';
import { ImportBillDepotDetail } from '../ImportDepotDetail';

@Component({
  selector: 'app-detail-import-depot',
  templateUrl: './detail-import-depot.component.html',
  styleUrls: ['../../dash.component.scss']
})
export class DetailImportDepotComponent implements OnInit {

  NameWeb;
  today = new Date();
id;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private importDepotService: ImportDepotService,
    private productService: ProductService,
    private toastr: NotifierService,
  ) {
    this.NameWeb = data.name,
    this.id = data.id
  }
 

  Data: any;
  dataProduct:any;
  title: any;
  username: any;
  ngOnInit(): void {
    this.username = localStorage.getItem('username')!;
    this.importDepotService.GetListDetail(this.id).subscribe(res => {
      this.Data = res.acc;
      console.log(this.Data);
    });
    this.productService.GetCBX().subscribe(res=>{
      this.dataProduct=res.data;
      console.log(this.dataProduct);
    });
    this.title = "Detail import bill depot";
  }
  InsertBillDetail = new FormGroup({
    idProduct: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
  });

  public delete(id: number) {
    if (window.confirm('Do you want to remove this bill detail with id equal to' + id + ' ?')) {
      this.importDepotService.DeleteDetail(id).subscribe((dataT: { status: any; message: any; }) => {
        if (dataT.status == "Success") {
          this.toastr.ShowSuccess('Success!', dataT.message);
          this.ngOnInit();
        }
        else {
          this.toastr.ShowError('Error!', dataT.message);
          return;
        }

      });
    }
  }
  dataInsert=new ImportBillDepotDetail(0,0,0,0,0);
  OnInsertBillDetail(form:FormGroup){
    console.log(form.value);
    if(form.value.idProduct.length<1)
    {
      this.toastr.ShowError('idProduct is null!',' Please check again!');
      return;
    }
    if(form.value.price<1)
    {
      this.toastr.ShowError('quantity <> 0!',' Please check again!');
      return;
    }
    if(form.value.price<1)
    {
      this.toastr.ShowError('price <> 0!',' Please check again!');
      return;
    }
    this.dataInsert.BillId=this.id;
    this.dataInsert.idProduct=form.value.idProduct;
    this.dataInsert.Quantity=form.value.quantity;
    this.dataInsert.price=form.value.price;
    this.importDepotService.InsertDetail(this.dataInsert).subscribe((dataT: { status: any; message: any; }) => {
      if(dataT.status=="Success")
      {
          this.ngOnInit();
          return this.toastr.ShowSuccess('Success!',dataT.message);
      }
      else{
        return this.toastr.ShowError('Error!',dataT.message);
      }
    });
    
    
  }
}
