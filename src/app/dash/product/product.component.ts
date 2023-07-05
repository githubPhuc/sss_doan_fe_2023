import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { NotifierService } from 'src/app/service/notifier.service';
import { DetailComponent } from './detail/detail.component';
import { ImageComponent } from './image/image.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { ProductService } from './product.service';
import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../dash.component.scss']
})
export class ProductComponent  implements OnInit {
  closeResult = '';

  constructor(private productService:ProductService,
              private toastr:NotifierService,
              private router:Router,
              private dialog:MatDialog,
              private alert: ToastrService,
              
      ) { }
      // dtoptions: DataTables.Settings = {};
      //dtTrigger:Subject<any>=new Subject<any>();

    Data:any;
    title:any; 
  
  ngOnInit(): void {
    if(localStorage.getItem('role')!='Admin')
    {
      this.router.navigate(['/Login']);
    }
    this.productService.GetList("","","","","","","").subscribe(res=>{
      this.Data=res.data;
    })
      this.title="Directory Product";
  }

  // go to view insert
  _InsertView(){
    this.dialog.open(InsertProductComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Insert Product'
      }
    });
  }
  public Update(id:number)
  {
    console.log(id)
    this.dialog.open(UpdateProductComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Update Product',
        id:id,
      }
    });
    
  }
  
//----------Search from-------------//
  searchForm = new FormGroup({
    nameProduct: new FormControl(''),
    nameProduce: new FormControl(''),
    nameRam: new FormControl(''),
    nameCpu: new FormControl(''),
    nameDisplay: new FormControl(''),
    nameColor: new FormControl(''),
    nameCard: new FormControl(''),
   
  });
  public Search(form:FormGroup) {

    this.productService.GetList(form.value.nameProduct,form.value.nameProduce,form.value.nameRam,form.value.nameCpu,form.value.nameDisplay,form.value.nameColor,form.value.nameCard).subscribe(res=>{
      this.Data=res.data;
    })
  }
  public delete(id:number)
  {
    if(window.confirm('Do you want to remove this product with id equal to '+id+' ?'))
    {
      this.productService.DeleteProduct(id).subscribe((dataT: { status: any; message: any; }) => {
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
  public Detail(id:number)
  {
   
    this.dialog.open(DetailComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Detail Product',
        id:id,
      }
    });  
    
    
  }
  public Images(id:number)
  {
    this.dialog.open(ImageComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Detail Images',
        id:id,
      }
    });  
  }
  ngOnDestroy(): void {
    this.Data.unsubscribe();
  }
}
