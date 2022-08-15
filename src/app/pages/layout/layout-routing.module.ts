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
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'product',
        loadChildren: () => import('../../modules/products/products.module').then(m => m.ProductsModule),
        data: {breadcrumb: 'Product'},
      },
      // {
      //   path: 'product/category/:categoryId',
      //   loadChildren: () => import('../../modules/product/product.module').then(m => m.ProductModule),
      //   data: {
      //     breadcrumb: 'Category'
      //   }
      // },
      // {
      //   path: 'product/type/:typeId',
      //   loadChildren: () => import('../../modules/product/product.module').then(m => m.ProductModule),
      //   data: {
      //     breadcrumb: 'Product type',
      //   }
      // },
      {
        path: 'cart',
        loadChildren: () => import('../../modules/cart/cart.module').then(m => m.CartModule),
        data: {breadcrumb: 'Cart'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
