  import {Component, OnInit} from '@angular/core';
  import {ProductState} from "../../../../share/states/product/product.state";
  import {IohProduct} from "../../../../share/model/product/ioh-product";

  @Component({
    selector: 'app-product-content',
    templateUrl: './product-content.component.html',
    styleUrls: ['./product-content.component.scss']
  })
  export class ProductContentComponent implements OnInit {
    listProduct: IohProduct[] = [];

    constructor(private productState: ProductState) {
    }

    ngOnInit(): void {
      this.listenState();
    }

    listenState(): void {
      this.productState.$listProduct
        .subscribe(res => {
          this.productState.defaultCountProductMore(0);
          this.listProductChange();
        });
    }

    listProductChange(): void {
      const listProduct = this.productState.getListProductSubject();
      if (listProduct) {
        this.listProduct = listProduct;
        console.log(this.listProduct);
      }
    }
    formatCash(price: number) {
      const str = price.toString();
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      })
    }
  }
