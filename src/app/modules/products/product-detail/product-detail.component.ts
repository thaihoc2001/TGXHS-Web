import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {BreadcrumbService} from "xng-breadcrumb";
import {ProductState} from "../../../share/states/product/product.state";
import {IohProduct} from "../../../share/model/product/ioh-product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = '';
  productItem: any;
  listProductByCategory: IohProduct[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private productState: ProductState,
              private breadcrumbService: BreadcrumbService,) { }

  ngOnInit(): void {
    this.getIdFormParams();
    this.listenState();
  }


  listenState(): void{
    this.productId && this.productState.getProductById(parseInt(this.productId));
    this.productState.$product.subscribe(res => this.listenProductDetail())
    this.productState.$listProduct.subscribe(res => this.listProductChange());
  }

  listProductChange(): void {
    const listProduct = this.productState.getListProductSubject();
    if (listProduct) {
      this.listProductByCategory = listProduct;
      console.log(this.listProductByCategory);
    }
  }


  getIdFormParams(): void{
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
  }

  listenProductDetail(): void{
    const product = this.productState.getProduct();
    if(product){
      this.productItem = product;
      this.productItem && this.productState.getProductByCategory(this.productItem.categoryId, 0);
      this.breadcrumbService.set('product/:id', this.productItem.productName);
    }
  }
}
