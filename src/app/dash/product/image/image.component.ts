import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { InsertImageComponent } from '../insert-image/insert-image.component';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['../product.component.scss']
})
export class ImageComponent implements OnInit {

  NameWeb;
  id;
  dataImage:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        
                                        private productService:ProductService,
                                        private dialog:MatDialog,
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name;
                                          this.id=data.id;
                                        }
  
  ngOnInit(): void {
    this.productService.ListImages(this.id).subscribe(res=>{
      this.dataImage=res.data;
      console.log(this.dataImage);
    })
  }
  public insertImage()
  {
    this.dialog.open(InsertImageComponent,{
      data : {
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '600ms',
        name : 'Detail Images',
        id:this.id,
      }
    });  
  }
}
