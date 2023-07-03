import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { ImageComponent } from '../image/image.component';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-insert-image',
  templateUrl: './insert-image.component.html',
  styleUrls: ['../../dash.component.scss']
})
export class InsertImageComponent implements OnInit {
  NameWeb;
  id;
  imgShow:any;
  isSuccess! :boolean;
  formData=new FormData();
  file!: File; 
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
    this.imgShow=" No-Image.png";
  }
  ShowImage(event:any){
    let reader = new FileReader();
    this.file = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=()=>{
      this.imgShow=reader.result;
    }
  }
  OnInsertImageProduct(){
    if(this.file==null)
    {
      this.toastr.ShowError('Image not null!',' Please check again!');
      return;
    }
    let formdata = new FormData();
    formdata.append("file", this.file, this.id)
    this.productService.uploadImage(this.id,formdata).subscribe(result => {
      this.toastr.ShowSuccess('Success!',"");
      location.reload();
    });
    
    
  }
  }

