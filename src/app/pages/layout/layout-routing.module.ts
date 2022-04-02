import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'product/:id',
        loadChildren: () => import('../../modules/product-detail/product-detail.module').then(m => m.ProductDetailModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../../modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'product/category/:categoryId',
        loadChildren: () => import('../../modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'product/type/:typeId',
        loadChildren: () => import('../../modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../../modules/cart/cart.module').then(m => m.CartModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
