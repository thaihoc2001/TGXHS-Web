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
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.addClass();
  }
  addClass(): void{
    // tslint:disable-next-line:only-arrow-functions typedef
    window.addEventListener('scroll', function(){
      const menu = document.querySelector('nav');
      // @ts-ignore
      menu.classList.toggle('sticky', window.scrollY > 85);
    });
  }

  toProduct() {
    this.router.navigate(['product'])
  }
}
