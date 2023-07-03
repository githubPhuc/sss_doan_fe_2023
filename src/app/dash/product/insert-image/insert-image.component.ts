import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-insert-image',
  templateUrl: './insert-image.component.html',
  styleUrls: ['../product.component.scss']
})
export class InsertImageComponent implements OnInit {
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
      
  }
  
}
