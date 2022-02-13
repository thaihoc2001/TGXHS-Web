import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";

@Component({
  selector: 'app-product-detail-content',
  templateUrl: './product-detail-content.component.html',
  styleUrls: ['./product-detail-content.component.scss']
})
export class ProductDetailContentComponent implements OnInit {
  productId: string | null = '';
  productItem: any;

  constructor(private activatedRoute: ActivatedRoute,
              private productState: ProductState) { }

  ngOnInit(): void {
    this.getIdFormParams();
    this.listenState();
  }
  listenState(): void{
    if(this.productId){
      this.productState.getProductById(this.productId);
    }
    this.productState.$product.subscribe(res => this.listenProductDetail())
  }

  getIdFormParams(): void{
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log(this.productId);
    });
  }

  listenProductDetail(): void{
    const product = this.productState.getProduct();
    if(product){
      this.productItem = product;
      this.productItem.forEach((res: any) => console.log(res.priceValue));
      console.log(this.productItem);
      console.log(this.productItem.productName);
    }
  }
}
