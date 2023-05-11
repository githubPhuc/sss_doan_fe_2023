import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {
constructor(private toastr:ToastrService){

}

ngOnInit(): void {
    
}
ShowSuccess(title:any,message:any){
 this.toastr.success(message,title),{
  easing:'ease-in',
  easeTime:1000,
 }
}
ShowError(title:any,message:any){
  this.toastr.error(message,title),{
    easing:'ease-in',
      easeTime:1000,
   }
}
showWarning(title:any,message:any){
  this.toastr.warning(message,title),{
    easing:'ease-in',
    easeTime:1000,
   }
}
Showinfo(title:any,message:any){
  this.toastr.info(message,title),{
    easing:'ease-in',
      easeTime:1000,
   }
}
}
