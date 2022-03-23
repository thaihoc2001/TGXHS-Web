import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './product.component';
import {ProductAsideComponent} from './component/product-aside/product-aside.component';
import {ProductContentComponent} from './component/product-content/product-content.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ProductTypeState} from "../../share/states/product-type/product-type.state";
import {ProductCategoryService} from "../../share/service/product-category/product-category.service";
import {ProductState} from "../../share/states/product/product.state";
import {ShareUiModule} from "../../share/ui/share-ui.module";


@NgModule({
  declarations: [
    ProductComponent,
    ProductAsideComponent,
    ProductContentComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        ShareUiModule
    ],
  providers: [
    ProductTypeState,
    ProductCategoryService,
    ProductState
  ]
})
export class ProductModule {
}
