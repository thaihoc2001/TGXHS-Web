  import {Component, OnInit} from '@angular/core';
  import {ProductState} from "../../../../share/states/product/product.state";
  import {IohProduct} from "../../../../share/model/product/ioh-product";
  import { tap } from 'rxjs/operators';

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
      this.productState.defaultCountProductMore(5);
      this.listenState();
    }

    listenState(): void {
      this.productState.$listProduct
        .subscribe(res => {
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
  }
