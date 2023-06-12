import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertAccountComponent implements OnInit {

  NameWeb;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    this.NameWeb = data.name
  }

  ngOnInit(): void {
  }

}