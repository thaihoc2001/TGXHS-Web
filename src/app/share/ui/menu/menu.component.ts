import { Component, OnInit } from '@angular/core';
import {ProductTypeState} from "../../states/product-type/product-type.state";
import {IohTypeCategoriesProduct} from "../../model/product-type/ioh-type-categories-product";
import {IohProductTypeModel} from "../../model/product-type/ioh-product-type.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  listCategoryAndType: IohTypeCategoriesProduct[] = [];
  listProductType: IohProductTypeModel[] = [];
  constructor(private productTypeState: ProductTypeState, private router: Router) { }

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
  async onclick(id: any){
    await this.router.navigate([`/product/type/${id}`]);
    window.location.reload();
  }
  async onclickCategory(type_id: any, category_id: any){
    console.log(type_id,category_id);
    console.log(`/product/type/${type_id}?list=${category_id}`);
    await this.router.navigate([`/product/type/${type_id}`],
      { queryParams: { list: `${category_id}` } });
    window.location.reload();
  }
}
