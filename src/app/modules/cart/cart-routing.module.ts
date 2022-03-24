import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./cart.component";
import {CartDetailComponent} from "./component/cart-detail/cart-detail.component";
import {InfoBuyComponent} from "./component/info-buy/info-buy.component";
import {OrderComponent} from "./component/order/order.component";

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
        component: CartDetailComponent
      },
      {
        path: 'info-buy',
        component: InfoBuyComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
