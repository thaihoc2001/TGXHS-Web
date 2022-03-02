import { Component, OnInit } from '@angular/core';
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";
@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.scss']
})
export class ProductsByTypeComponent implements OnInit {
  listProduct: IohProduct[] = [];
  listProductType: IohProductTypeModel[] = [];
  constructor(private productState: ProductState,
              private productTypeState: ProductTypeState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productState.$listProduct.subscribe(res => this.listenProductChange());
    this.productTypeState.$listProductType.subscribe(res => this.listenProductType());
  }

  listenProductChange(): void{
    const listProduct = this.productState.getListProductSubject();
    if (listProduct){
      this.listProduct = listProduct;
      console.log(listProduct);
    }
  }

  listenProductType(): void{
    const listProductType = this.productTypeState.getProductType();
    if (listProductType) {
      this.listProductType = listProductType;
    }
  }
  filterProductType(): IohProductTypeModel[]{
    return this.listProductType.filter(productType => productType.status === 'Home')
  }
  filterProductByProductType(productTypeName: String): IohProduct[]{
    let productTypeId = 0;
    this.listProductType.filter(productType => {
      if(productType.productTypeName === productTypeName){
        productTypeId = productType.productTypeId;
      }
    })
    return this.listProduct.filter(res => res.productTypeId === productTypeId);
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
