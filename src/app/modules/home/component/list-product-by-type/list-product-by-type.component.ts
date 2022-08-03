import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class ListProductByTypeComponent implements OnInit, AfterViewInit{
  listProductType: IohProductTypeModel[] = [];
  listProductSale: IohProduct[] = [];
  statusLoaderType = false;
  statusLoaderProduct = false;
  @ViewChild('listType', { read: ElementRef, static:false }) listType: ElementRef;
  @ViewChild('listProduct', { read: ElementRef, static:false }) listProduct: ElementRef;
  constructor(private productTypeState: ProductTypeState,
    private productState: ProductState) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void {
    this.productTypeState.$listProductType.subscribe(res => this.productTypeChange());
    this.productState.$listProduct.subscribe(res => this.changeListProduct());
    this.productState.isReady$.subscribe(res => {
      this.statusLoaderProduct = res
    });
    this.productTypeState.isReady$.subscribe(res => {
      this.statusLoaderType = res

    })
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
