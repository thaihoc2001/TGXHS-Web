import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-sale-home',
  templateUrl: './product-sale-home.component.html',
  styleUrls: ['./product-sale-home.component.scss']
})
export class ProductSaleHomeComponent implements OnInit {
  listProductSale: IohProduct[] = [];
  constructor(private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productState.$listProduct.subscribe(res => this.changeListProduct())
  }
  changeListProduct(): void{
    const listProduct = this.productState.getListProductSubject();
    if(listProduct){
      console.log(listProduct);
      this.listProductSale = listProduct.filter(res => {
        if(res.status === "Sale")
        return res;
      });
    }
    console.log(this.listProductSale);
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2
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
