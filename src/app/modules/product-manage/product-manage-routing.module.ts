import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductManageComponent} from "./product-manage.component";
import {ProductSummaryComponent} from "./component/product-summary/product-summary.component";

const routes: Routes = [
  {
    path: '',
    component: ProductManageComponent,
    children: [
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'full'
      },
      {
        path: 'summary',
        component: ProductSummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManageRoutingModule { }
