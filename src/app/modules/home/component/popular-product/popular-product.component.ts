import { Component, OnInit } from '@angular/core';
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {
  listPopularProduct: IohProduct[] = [];
  constructor(private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void {
    this.productState.$listProduct.subscribe(res => this.listProductChange())
  }

  listProductChange(): void {
    const listProduct = this.productState.getListProductSubject();
    if (listProduct) {
      this.listPopularProduct = listProduct.filter(res => {
        if (res.status === "Sale") {
          return res;
        }
      })
    }
  }
}
