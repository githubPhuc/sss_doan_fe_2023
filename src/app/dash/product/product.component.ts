import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { NotifierService } from 'src/app/service/notifier.service';
import { DetailComponent } from './detail/detail.component';
import { InsertProductComponent } from './insert-product/insert-product.component';
import { ProductService } from './product.service';
import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
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
      dtTrigger:Subject<any>=new Subject<any>();

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
    this.productService.GetList("","","","","","","").subscribe(res=>{
      this.Data=res.data;
      console.log(this.Data);
    })
      this.title="Directory Product"

      
      // this.dtoptions = {
      //   destroy: true, 
      //     lengthMenu: [5, 10, 25, 50, 75, 100],
      //     columnDefs: [
      //         {
      //             "targets": [0,1],
      //             orderable: false
      //         },
      //     ],
      //     info: false,
      //     processing: false,
      //     serverSide: false,
      //     bFilter: true,
      //     bPaginate: true,
      //     bLengthChange: true,
      //     bInfo: true,
      //     responsive: true,
      //     lengthChange: true,
      //     autoWidth: false,
      //     stateSave: true,
      //     buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
  
      // };
     
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
    if(window.confirm('Do you want to remove this manufacturer with id equal to '+id+' ?'))
    {
      this.productService.DeleteProduct(id).subscribe((dataT: { status: any; message: any; }) => {
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
 
}
