import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

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
import { CardDisplayComponent } from './card-display/card-display.component';
import { InsertCardDisplayComponent } from './card-display/insert-card-display/insert-card-display.component';
import { DepotComponent } from './depot/depot.component';
import { InsertDepotComponent } from './depot/insert-depot/insert-depot.component';
import { UpdateDepotComponent } from './depot/update-depot/update-depot.component';
import { ProducerComponent } from './producer/producer.component';
import { InsertProducerComponent } from './producer/insert-producer/insert-producer.component';
import { UpdateProducerComponent } from './producer/update-producer/update-producer.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';
import { InsertDepartmentComponent } from './department/insert-department/insert-department.component';
import { InsertCategoryComponent } from './category-product/insert-category/insert-category.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { InsertProductComponent } from './product/insert-product/insert-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { InsertSaleComponent } from './product-sale/insert-sale/insert-sale.component';
import { UpdateSaleComponent } from './product-sale/update-sale/update-sale.component';
import { ImageComponent } from './product/image/image.component';
import { InsertImageComponent } from './product/insert-image/insert-image.component';
import { DepartmentComponent } from './department/department.component';
import { ImportDepotComponent } from './import-depot/import-depot.component';
import { InsertImportDepotComponent } from './import-depot/insert-import-depot/insert-import-depot.component';
import { DetailImportDepotComponent } from './import-depot/detail-import-depot/detail-import-depot.component';
import { AccountUserComponent } from './account-user/account-user.component';


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
    CardDisplayComponent,
    InsertCardDisplayComponent,
    DepotComponent,
    InsertDepotComponent,
    UpdateDepotComponent,
    ProducerComponent,
    DepartmentComponent,
    InsertProducerComponent,
    UpdateProducerComponent,
    UpdateAccountComponent,
    InsertDepartmentComponent,
    InsertCategoryComponent,
    CategoryProductComponent,
    InsertProductComponent,
    UpdateProductComponent,
    ProductSaleComponent,
    InsertSaleComponent,
    UpdateSaleComponent,
    ImageComponent,
    InsertImageComponent,
    ImportDepotComponent,
    InsertImportDepotComponent,
    DetailImportDepotComponent,
    AccountUserComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    
  ],
  bootstrap: [DashComponent]
  
})
export class DashModule { }
