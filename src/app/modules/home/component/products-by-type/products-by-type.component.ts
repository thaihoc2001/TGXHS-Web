import { Component, OnInit } from '@angular/core';
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {IohProductTypeModel} from "../../../../share/model/product/ioh-product-type.model";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.scss']
})
export class ProductsByTypeComponent implements OnInit {
  listProduct: IohProduct[] = [];
  listProductType: IohProductTypeModel[] = [];
  constructor(private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productState.$listProduct.subscribe(res => this.listenProductChange());
    this.productState.$listProductType.subscribe(res => this.listenProductType());
  }

  listenProductChange(): void{
    const listProduct = this.productState.getProduct();
    if (listProduct){
      this.listProduct = listProduct;
      console.log(listProduct);
    }
  }

  listenProductType(): void{
    const listProductType = this.productState.getProductType();
    if (listProductType) {
      this.listProductType = listProductType;
      console.log(listProductType);
    }
  }
  filterProduct(productTypeId: any): IohProduct[]{
    const listPorductFilter = this.listProduct.filter(item => item.productTypeId === productTypeId);
    console.log(listPorductFilter);
    return listPorductFilter;
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
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
