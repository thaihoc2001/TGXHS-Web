import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ActivatedRoute} from "@angular/router";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";

@Component({
  selector: 'app-product-detail-by-category',
  templateUrl: './product-detail-by-category.component.html',
  styleUrls: ['./product-detail-by-category.component.scss']
})
export class ProductDetailByCategoryComponent implements OnInit {
  productId: string | null = '';
  productItem: IohProduct;

  constructor(private activatedRoute: ActivatedRoute,
              private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
    this.getIdFormParams();
  }
  listenState(): void{
    if(this.productId){
      this.productState.getProductById(parseInt(this.productId));
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
      console.log(this.productItem);
      console.log(this.productItem.productName);
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoWidth: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
}
