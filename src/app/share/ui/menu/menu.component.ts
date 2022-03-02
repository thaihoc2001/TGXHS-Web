import { Component, OnInit } from '@angular/core';
import {ProductTypeState} from "../../states/product-type/product-type.state";
import {IohTypeCategoriesProduct} from "../../model/product-type/ioh-type-categories-product";
import {IohProductTypeModel} from "../../model/product-type/ioh-product-type.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  listCategoryAndType: IohTypeCategoriesProduct[] = [];
  listProductType: IohProductTypeModel[] = [];
  constructor(private productTypeState: ProductTypeState) { }

  ngOnInit(): void {
    this.listenState();
    this.addClass();
  }
  listenState(): void{
    this.productTypeState.$listProductTypeAndCategories.subscribe(res => this.categoriesAndProductTypeChange())
  }
  categoriesAndProductTypeChange(): void{
    const list = this.productTypeState.getProductTypeAndCategories();
    if(list){
      this.listCategoryAndType = list;
      console.log(this.listCategoryAndType)
    }
  }
  addClass(): void{
    // tslint:disable-next-line:only-arrow-functions typedef
    window.addEventListener('scroll', function(){
      const menu = document.querySelector('menu');
      // @ts-ignore
      menu.classList.toggle('sticky', window.scrollY > 85);
    });
  }
}
