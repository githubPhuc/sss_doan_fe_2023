import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';
import { Depot } from '../Depot';
import { DepotService } from '../depot.service';

@Component({
  selector: 'app-update-depot',
  templateUrl: './update-depot.component.html',
  styleUrls: ['../depot.component.scss']
})
export class UpdateDepotComponent implements OnInit {

  NameWeb;
  id;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private depotService: DepotService,
    private toastr: NotifierService,
    private router: Router,
  ) {
    this.NameWeb = data.name,
      this.id = data.id
  }
  dataCity: any;
  dataDistrict: any;
  dataWards: any;
  numDataCity!: number;
  EditProductCode = '';
  imgShow: any;
  isSuccess!: boolean;
  depot!: Depot;

  dataDepot = new Depot(0, "", "", "", "", "", true);
  updateForm = new FormGroup({
    codeDepot: new FormControl(''),
    location: new FormControl(''),
    nameDepot: new FormControl(''),
    phone: new FormControl(''),
    storekeepers: new FormControl(''),
  });
  ngOnInit(): void {
    this.depotService.FindID(this.id).subscribe(res => {
      
      this.updateForm.patchValue(res.acc);
      console.log(this.updateForm.value);
      console.log(res);
    })
  }
  


  onSubmitInsert(form: FormGroup) {
    this.isSuccess = false;
    if (form.value.codeDepot.length != 3) {
      this.toastr.ShowError('String length must be equal to 3!', ' Please check again!');
      return;
    }
    if (form.value.phone.length > 10 || form.value.phone.length < 10) {
      this.toastr.ShowError('Phone number must be 10 characters!', ' Please check again!');
      return;
    }
    if (form.value.nameDepot.length < 1) {
      this.toastr.ShowError('Name cannot be blank!', ' Please check again!');
      return;
    }
    if (form.value.location == "" || form.value.location == "undefined" || form.value.location == null) {
      this.toastr.ShowError('Location cannot be blank!', ' Please check again!');
      return;
    }
    if (form.value.storekeepers == "" || form.value.storekeepers == "undefined" || form.value.storekeepers == null) {
      this.toastr.ShowError('Storekeepers cannot be blank!', ' Please check again!');
      return;
    }
    this.dataDepot.codeDepot = form.value.codeDepot;
    this.dataDepot.Location = form.value.location;
    this.dataDepot.nameDepot = form.value.nameDepot;
    this.dataDepot.Phone = form.value.phone;
    this.dataDepot.storekeepers = form.value.storekeepers;
    console.log(this.dataDepot);
    this.depotService.Put(this.dataDepot, this.id).subscribe((dataT: { status: any; message: any; }) => {
      if (dataT.status == "Success") {
        this.toastr.ShowSuccess('Success!', dataT.message);
        location.reload();
      }
      else {
        this.isSuccess == false;
        this.toastr.ShowError('Error!', dataT.message);
        return;
      }
    });

  }
}
