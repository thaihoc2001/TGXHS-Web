import { Component, OnInit } from '@angular/core';
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {ProductCategoryState} from "../../../../share/states/product-category/product-category.state";
import {ProductState} from "../../../../share/states/product/product.state";

@Component({
  selector: 'app-product-aside',
  templateUrl: './product-aside.component.html',
  styleUrls: ['./product-aside.component.scss']
})
export class ProductAsideComponent implements OnInit {
  listProductType: IohProductTypeModel[] = [];
  listProductCategories: IohProductCategoryModel[] = [];
  constructor(private productTypeState: ProductTypeState,
              private productCategoryState: ProductCategoryState,
              private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productTypeState.$listProductType.subscribe(res => this.productTypeChange())
    this.productCategoryState.$listCategory.subscribe(res => this.productCategoryChange())
  }
  productTypeChange(): void{
    const listProductType = this.productTypeState.getProductType();
    if(listProductType){
      this.listProductType = listProductType;
      console.log(this.listProductType);
    }
  }

  private productCategoryChange(): void{
    const listProduct = this.productCategoryState.getProductCategory();
    if(listProduct){
      this.listProductCategories = listProduct;
      console.log(this.listProductCategories);
    }
  }

  chooseProductType(productTypeId: number) {

  }

  loadProductByCategory(productCategoryId: number) {
    const count = this.productState.getCountNumber();
    this.productState.getProductByCategory(productCategoryId, count);
    console.log(this.productState.getListProductSubject());
  }
}
