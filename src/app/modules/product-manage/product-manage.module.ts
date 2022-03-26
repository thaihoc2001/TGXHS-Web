import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManageRoutingModule } from './product-manage-routing.module';
import { ProductManageComponent } from './product-manage.component';
import { CreateProductModalComponent } from './component/create-product-modal/create-product-modal.component';
import { ProductSummaryComponent } from './component/product-summary/product-summary.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductState} from "../../share/states/product/product.state";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProductManageNavComponent } from './component/product-manage-nav/product-manage-nav.component';
import { SummaryCategoryComponent } from './component/summary-category/summary-category.component';
import {SummaryProductTypeComponent} from "./component/summary-product-type/summary-product-type.component";
import {CreateProductTypeComponent} from "./component/create-product-type/create-product-type.component";
import {CreateCategoryComponent} from "./component/create-category/create-category.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {ProductTypeState} from "../../share/states/product-type/product-type.state";
import {ProductCategoryState} from "../../share/states/product-category/product-category.state";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductManageComponent,
    CreateProductModalComponent,
    ProductSummaryComponent,
    ProductManageNavComponent,
    SummaryCategoryComponent,
    SummaryProductTypeComponent,
    CreateProductTypeComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductManageRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    CKEditorModule,
    CKEditorModule,
    CKEditorModule,
    MatPaginatorModule,
    MatTableModule,
    RouterModule
  ],
  providers: [
    ProductState,
    ProductTypeState,
    ProductCategoryState
  ]
})
export class ProductManageModule { }
