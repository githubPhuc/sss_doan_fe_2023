import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { ProducerService } from '../../producer/producer.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  NameWeb;
  id;
  dataProduct:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
                                        
                                        private productService:ProductService,
                                      
                                        private toastr:NotifierService,
                                        private router:Router,
                                        ) {
                                          this.NameWeb = data.name;
                                          this.id=data.id;
                                        }
  
  ngOnInit(): void {
    this.productService.GetProductOnIdDetail(this.id).subscribe(res => {
      this.dataProduct=res.data;
      console.log(this.dataProduct);
      console.log(res);
    })
  }
}
