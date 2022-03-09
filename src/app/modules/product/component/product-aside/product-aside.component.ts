import { Component, OnInit } from '@angular/core';
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import {IohTypeCategoriesProduct} from "../../../../share/model/product-type/ioh-type-categories-product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductState} from "../../../../share/states/product/product.state";

@Component({
  selector: 'app-product-aside',
  templateUrl: './product-aside.component.html',
  styleUrls: ['./product-aside.component.scss']
})
export class ProductAsideComponent implements OnInit {
  listCategoryAndType:IohTypeCategoriesProduct[] = [];
  listProductType: IohProductTypeModel[] = [];
  listCategory: any[] = [];
  title: string;
  constructor(private productTypeState: ProductTypeState,private router: ActivatedRoute,private routerPage: Router,private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productTypeState.$listProductTypeAndCategories.subscribe(res => this.productTypeChange())
  }
  productTypeChange(): void{
    const list = this.productTypeState.getProductTypeAndCategories();
    if (list){
      this.listCategoryAndType = list;
      this.getCategory();
    }
  }
  getCategory(){
    const {id}= this.router.snapshot.params;
    for (let type of this.listCategoryAndType){
      if (type.productTypeId === Number(id)){
        this.title = type.productTypeName;
        this.listCategory = type.categories;
      }
    }
  }
  async checkBoxCategory(){
    const {id}= this.router.snapshot.params;
    let checkedValue = [];
    const inputElements = document.getElementsByClassName('form-check-input');
    // @ts-ignore
    for(let item of inputElements){
      if(item.checked){
        checkedValue.push(item.value);
      }
    }
    const list = checkedValue.join('and');
    this.productState.getCategoryCheckBox(id,0,list);
    this.productState.setIsBtn(false);
  }
}
