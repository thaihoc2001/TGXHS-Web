import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartDetailComponent } from './component/cart-detail/cart-detail.component';
import { InfoBuyComponent } from './component/info-buy/info-buy.component';
import { OrderComponent } from './component/order/order.component';
import { CartNavComponent } from './component/cart-nav/cart-nav.component';
import {ShareUiModule} from "../../share/ui/share-ui.module";
import {ReactiveFormsModule} from "@angular/forms";
import {OrdersState} from "../../share/states/orders/orders.state";


@NgModule({
  declarations: [
    CartComponent,
    CartDetailComponent,
    InfoBuyComponent,
    OrderComponent,
    CartNavComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        ShareUiModule,
        ReactiveFormsModule
    ],
  providers: [
    OrdersState
  ]
})
export class CartModule { }
