import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailContentComponent } from './component/product-detail-content/product-detail-content.component';
import {ProductState} from "../../share/states/product/product.state";


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductDetailContentComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ],
  providers: [
    ProductState
  ]
})
export class ProductDetailModule { }
