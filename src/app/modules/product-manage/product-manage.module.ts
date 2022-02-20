import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManageRoutingModule } from './product-manage-routing.module';
import { ProductManageComponent } from './product-manage.component';
import { CreateProductModalComponent } from './component/create-product-modal/create-product-modal.component';
import { ProductSummaryComponent } from './component/product-summary/product-summary.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductState} from "../../share/states/product/product.state";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    ProductManageComponent,
    CreateProductModalComponent,
    ProductSummaryComponent
  ],
  imports: [
    CommonModule,
    ProductManageRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    CKEditorModule,
    CKEditorModule,
    CKEditorModule
  ],
  providers: [
    ProductState
  ]
})
export class ProductManageModule { }
