import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailContentComponent } from './component/product-detail-content/product-detail-content.component';
import {ProductState} from "../../share/states/product/product.state";
import { ProductDetailByCategoryComponent } from './component/product-detail-by-category/product-detail-by-category.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatCardModule} from "@angular/material/card";
import {ShareUiModule} from "../../share/ui/share-ui.module";
import { ProductDetailRightSideBarComponent } from './component/product-detail-right-side-bar/product-detail-right-side-bar.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductDetailContentComponent,
    ProductDetailByCategoryComponent,
    ProductDetailRightSideBarComponent
  ],
    imports: [
        CommonModule,
        ProductDetailRoutingModule,
        CarouselModule,
        MatCardModule,
        ShareUiModule
    ],
  providers: [
    ProductState
  ]
})
export class ProductDetailModule { }
