import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { ColorProduct } from './Color';
import { ColorService } from './color.service';

@Component({
  selector: 'app-color-product',
  templateUrl: './color-product.component.html',
  styleUrls: ['./color-product.component.scss']
})
export class ColorProductComponent implements OnInit {
  closeResult = '';
  constructor(private colorService:ColorService,
              private toastr:NotifierService,
              private router:Router,
      ) { }
    Cpuproduct:any;
    token!:string;
    tk:any;
    dataT:any;
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
    localStorage.getItem('token')!=null?this.islogin=true:this  .islogin=false;
    this.username = localStorage.getItem('username')!;
    this.name =localStorage.getItem('name')!;
      this.colorService.GetColorProducts().subscribe(data => {
        this.Cpuproduct=data;
        this.dataT=data;
      });
      this.title="Directory Color Product"

     
  }
  InsertForm = new FormGroup({
    Name: new FormControl(''),
    code: new FormControl(''),
  });
  data=new ColorProduct(0,"","");
  
  onSubmit(form:FormGroup) {
    console.warn(form.value);
    if(form.value.Name==null||form.value.Name=='')
    {
      this.toastr.ShowError('Color name is null!',' Please check again!');
      return;
    }
    if(form.value.code==null||form.value.code=='')
    {
      this.toastr.ShowError('Code Data is null!',' Please check again!');
      return;
    }
    this.data.Name=form.value.Name;
    this.data.code=form.value.code;
    console.log(this.data);
    this.colorService.insert(this.data).subscribe((dataT: { status: any; message: any; }) => {
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

  public delete(id:number)
  {
    if(window.confirm('Do you want to clear this cpu ?'))
    {
      console.log(id);
      this.colorService.Delete(id).subscribe((dataT: { status: any; message: any; }) => {
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
}
