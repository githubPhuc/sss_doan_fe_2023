import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService implements OnInit {
  constructor(private toastr:ToastrService){
  
  }
  
  ngOnInit(): void {
      
  }
  ShowSuccess(title:any,message:any){
    this.toastr.success(message,title),{
     easing:'ease-in',
     easeTime:500,
    }
   }
   ShowError(title:any,message:any){
     this.toastr.error(message,title),{
       easing:'ease-in',
         easeTime:500,
      }
   }
   showWarning(title:any,message:any){
     this.toastr.warning(message,title),{
       easing:'ease-in',
       easeTime:500,
      }
   }
   Showinfo(title:any,message:any){
     this.toastr.info(message,title),{
       easing:'ease-in',
         easeTime:500,
      }
   }
}
