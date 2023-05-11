import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { PageserviceService } from './pageservice.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent  implements OnInit {

  constructor(private toastr:NotifierService,
              private router:Router,
              private responsepage: PageserviceService) { }


    pageLst:any;
    token!:string;
    tk:any;
    dataT:any;

    
  ngOnInit(): void {

      this.responsepage.getPage().subscribe(data => {
        this.pageLst=data;
        this.dataT=data;
        console.log(data);
      });
  }
}
