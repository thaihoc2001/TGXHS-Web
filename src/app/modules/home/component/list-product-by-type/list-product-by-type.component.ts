import { Component, OnInit } from '@angular/core';
import { IohProductTypeModel } from 'src/app/share/model/product-type/ioh-product-type.model';
import { IohProduct } from 'src/app/share/model/product/ioh-product';
import { ProductTypeService } from 'src/app/share/service/product-type/product-type.service';
import { ProductTypeState } from 'src/app/share/states/product-type/product-type.state';
import { ProductState } from 'src/app/share/states/product/product.state';

@Component({
  selector: 'app-list-product-by-type',
  templateUrl: './list-product-by-type.component.html',
  styleUrls: ['./list-product-by-type.component.scss']
})
export class ListProductByTypeComponent implements OnInit {
  listProductType: IohProductTypeModel[] = [];
  listProductSale: IohProduct[] = [];
  constructor(private productTypeState: ProductTypeState,
    private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void {
    this.productTypeState.$listProductType.subscribe(res => this.productTypeChange());
    this.productState.$listProduct.subscribe(res => this.changeListProduct());
  }
  changeListProduct(): void {
    const listProduct = this.productState.getListProductSubject();
    if (listProduct) {
      this.listProductSale = listProduct.filter(res => {
        return res;
      });
    }
  }
  productTypeChange(): void {
    const listProductType = this.productTypeState.getProductType();
    if (listProductType) {
      this.listProductType = listProductType;
    }
  }
}
