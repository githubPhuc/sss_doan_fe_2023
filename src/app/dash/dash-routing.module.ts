import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NotifierComponent } from './notifier/notifier.component';
import { PageComponent } from './page/page.component';

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
  { path: 'Page', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
