import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ColorProductComponent } from './color-product/color-product.component';
import { CpuProductComponent } from './cpu-product/cpu-product.component';
import { DashComponent } from './dash.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InsertComponent } from './menu/insert/insert.component';
import { InsertAccountComponent } from './account/insert/insert.component';
import { MenuComponent } from './menu/menu.component';
import { NotifierComponent } from './notifier/notifier.component';
import { ProductComponent } from './product/product.component';
import { RamProductComponent } from './ram-product/ram-product.component';
import { SsdProductComponent } from './ssd-product/ssd-product.component';
import { CityComponent } from './city/city.component';
import { WardsComponent } from './wards/wards.component';
import { DistrictComponent } from './district/district.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { DepotComponent } from './depot/depot.component';
import { ProducerComponent } from './producer/producer.component';
import { DepartmentComponent } from './department/department.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { ImportDepotComponent } from './import-depot/import-depot.component';
import { AccountUserComponent } from './account-user/account-user.component';

const routes: Routes = [
  {
    path: '',
    component: DashComponent,
    children: [
      {
        path: 'dashboard',
        component: DashComponent,
        
      }
    ]
  },
  { path: 'Home', component: HomeAdminComponent },
  { path: 'Notifi', component: NotifierComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Ram', component: RamProductComponent },
  { path: 'Ssd', component: SsdProductComponent },
  { path: 'Display', component: DisplayProductComponent },
  { path: 'Cpu', component: CpuProductComponent },
  { path: 'Color', component: ColorProductComponent },
  { path: 'Menu/Insert', component: InsertComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Account/Insert', component: InsertAccountComponent },
  { path: 'City', component: CityComponent },
  { path: 'Ward', component: WardsComponent },
  { path: 'District', component: DistrictComponent },
  { path: 'CardDisplay', component: CardDisplayComponent },
  { path: 'Depot', component: DepotComponent },
  { path: 'Producer', component: ProducerComponent },
  { path: 'Department', component: DepartmentComponent },
  { path: 'Category', component: CategoryProductComponent },
  { path: 'ProductSale', component: ProductSaleComponent },
  { path: 'ImportDepot', component: ImportDepotComponent },
  { path: 'AccountUser', component: AccountUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
