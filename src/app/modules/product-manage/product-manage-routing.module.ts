import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductManageComponent} from "./product-manage.component";
import {ProductSummaryComponent} from "./component/product-summary/product-summary.component";
import {CreateProductModalComponent} from "./component/create-product-modal/create-product-modal.component";
import {SummaryCategoryComponent} from "./component/summary-category/summary-category.component";
import {CreateCategoryComponent} from "./component/create-category/create-category.component";
import {SummaryProductTypeComponent} from "./component/summary-product-type/summary-product-type.component";
import {CreateProductTypeComponent} from "./component/create-product-type/create-product-type.component";

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
      },
      {
        path: 'summary-category',
        component: SummaryCategoryComponent
      },
      {
        path: 'create-category',
        component: CreateCategoryComponent
      },
      {
        path: 'summary-product-type',
        component: SummaryProductTypeComponent
      },
      {
        path: 'create-product-type',
        component: CreateProductTypeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManageRoutingModule { }
