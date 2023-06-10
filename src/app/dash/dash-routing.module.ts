import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorProductComponent } from './color-product/color-product.component';
import { CpuProductComponent } from './cpu-product/cpu-product.component';
import { DashComponent } from './dash.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InsertComponent } from './menu/insert/insert.component';
import { MenuComponent } from './menu/menu.component';
import { NotifierComponent } from './notifier/notifier.component';
import { ProductComponent } from './product/product.component';
import { RamProductComponent } from './ram-product/ram-product.component';
import { SsdProductComponent } from './ssd-product/ssd-product.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
