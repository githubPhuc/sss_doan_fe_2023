import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit {
  closeResult = '';
  constructor(private menuService:MenuService,
              private toastr:NotifierService,
              private router:Router,
      ) { }
    menus:any;
    token!:string;
    tk:any;
    dataT:any;
    title:any;
  
  ngOnInit(): void {

      this.menuService.getMenu().subscribe(data => {
        this.menus=data;
        this.dataT=data;
        console.log(data);
      });
      this.title="Danh mục menu"

     
  }
  _InsertView() {
    console.log("Theem mowis");
    this.router.navigate(['/admin/Menu/Insert']);
  }
}
