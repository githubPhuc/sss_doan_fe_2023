import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { MenuComponent } from './menu/menu.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './product/detail/detail.component';
import { InsertComponent } from './menu/insert/insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RamProductComponent } from './ram-product/ram-product.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { SsdProductComponent } from './ssd-product/ssd-product.component';
import { CpuProductComponent } from './cpu-product/cpu-product.component';
import { ColorProductComponent } from './color-product/color-product.component';
import { AccountComponent } from './account/account.component';
import { InsertAccountComponent } from './account/insert/insert.component';
import { DistrictComponent } from './district/district.component';
import { CityComponent } from './city/city.component';
import { WardsComponent } from './wards/wards.component';
import { InsertCityComponent } from './city/insert-city/insert-city.component';
import { InsertDistrictComponent } from './district/insert-district/insert-district.component';
import { InsertWardsComponent } from './wards/insert-wards/insert-wards.component';


@NgModule({
  declarations: [
    DashComponent,
    HomeAdminComponent,
    MenuComponent,
    UserPageComponent,
    ProductComponent,
    DetailComponent,
    InsertComponent,
    RamProductComponent,
    DisplayProductComponent,
    SsdProductComponent,
    CpuProductComponent,
    ColorProductComponent,
    AccountComponent,
    InsertAccountComponent,
    DistrictComponent,
    CityComponent,
    WardsComponent,
    InsertCityComponent,
    InsertDistrictComponent,
    InsertWardsComponent,
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    
    
  ],
  bootstrap: [DashComponent]
  
})
export class DashModule { }
