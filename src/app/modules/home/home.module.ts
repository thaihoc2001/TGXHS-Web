import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './component/header/header.component';
import {MatCardModule} from "@angular/material/card";
import { CarouselModule } from 'ngx-owl-carousel-o';
import {ProductState} from "../../share/states/product/product.state";
import {ProductTypeState} from "../../share/states/product-type/product-type.state";
import {ShareUiModule} from "../../share/ui/share-ui.module";
import { ProductSaleHomeComponent } from './component/product-sale-home/product-sale-home.component';
import { AfterPurchaseServiceComponent } from './component/after-purchase-service/after-purchase-service.component';
import { ListProductByTypeComponent } from './component/list-product-by-type/list-product-by-type.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductSaleHomeComponent,
    AfterPurchaseServiceComponent,
    ListProductByTypeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    CarouselModule,
    ShareUiModule
  ],
  providers: [
    ProductState,
    ProductTypeState
  ]
})
export class HomeModule { }
