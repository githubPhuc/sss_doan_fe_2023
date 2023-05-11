import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    DashComponent,
    HomeAdminComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
