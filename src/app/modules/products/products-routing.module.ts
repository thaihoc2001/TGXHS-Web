import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
        data: { breadcrumb: { skip: true } }
      },
      {
        path: ':id',
        loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
