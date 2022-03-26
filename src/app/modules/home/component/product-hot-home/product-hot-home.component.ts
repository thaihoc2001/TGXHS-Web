import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {ProductState} from "../../../../share/states/product/product.state";

@Component({
  selector: 'app-product-hot-home',
  templateUrl: './product-hot-home.component.html',
  styleUrls: ['./product-hot-home.component.scss']
})
export class ProductHotHomeComponent implements OnInit {
  listProductHot: IohProduct[] = [];

  constructor(private productState: ProductState) {
  }

  ngOnInit(): void {
    this.listenState();
  }

  listenState(): void {
    this.productState.$listProduct.subscribe(res => this.listProductChange())
  }

  listProductChange(): void {
    const listProduct = this.productState.getListProductSubject();
    if (listProduct) {
      this.listProductHot = listProduct.filter(res => {
        if (res.status === null) {
          return res;
        }
      })
    }
  }
}
