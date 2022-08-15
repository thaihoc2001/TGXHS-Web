import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./cart.component";
import {CartDetailComponent} from "./component/cart-detail/cart-detail.component";
import {InfoBuyComponent} from "./component/info-buy/info-buy.component";
import {OrderComponent} from "./component/order/order.component";
import {OrderCompleteComponent} from "./component/order-complete/order-complete.component";

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: '',
        redirectTo: 'cart-detail',
        pathMatch: 'full'
      },
      {
        path: 'cart-detail',
        component: CartDetailComponent,
        data: {breadcrumb: 'Cart detail'}
      },
      {
        path: 'info-buy',
        component: InfoBuyComponent,
        data: {breadcrumb: 'Info buy'}
      },
      {
        path: 'order',
        component: OrderComponent,
        data: {breadcrumb: 'Order'}
      },
      {
        path: 'order-complete',
        component: OrderCompleteComponent,
        data: {breadcrumb: 'Order Complete'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
