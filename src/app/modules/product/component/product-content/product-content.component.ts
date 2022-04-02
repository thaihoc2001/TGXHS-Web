import {Component, OnInit} from '@angular/core';
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit {
  listProduct: IohProduct[] = [];
  categoryId: string | null;
  typeId: string | null;

  constructor(private productState: ProductState,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId');
      this.typeId = params.get('typeId');
    });
    const count = this.productState.getCountNumber();
    if (this.categoryId) {
      this.productState.getProductByCategory(parseInt(this.categoryId), count);
    } else if (this.typeId) {
      this.productState.getProductByType(parseInt(this.typeId), count);
    } else {
      this.productState.getAllProduct(count);
    }
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

  seeMore(): void {
    const count = this.productState.getCountNumber();
    if (this.categoryId) {
      this.productState.getProductByCategory(parseInt(this.categoryId), count);
    } else if (this.typeId) {
      this.productState.getProductByType(parseInt(this.typeId), count);
    } else {
      this.productState.getAllProduct(count);
    }
  }


}
