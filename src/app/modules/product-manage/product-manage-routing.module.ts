import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductManageComponent} from "./product-manage.component";
import {ProductSummaryComponent} from "./component/product-summary/product-summary.component";
import {CreateProductModalComponent} from "./component/create-product-modal/create-product-modal.component";

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
      },
      {
        path: 'create',
        component: CreateProductModalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManageRoutingModule { }
