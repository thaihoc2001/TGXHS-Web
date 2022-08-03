import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-sale-home',
  templateUrl: './product-sale-home.component.html',
  styleUrls: ['./product-sale-home.component.scss'],
})
export class ProductSaleHomeComponent implements OnInit, AfterViewInit{
  listProductSale: IohProduct[] = [];
  loaderStatus = false;
  @ViewChild('productSaleElement', { read: ElementRef, static:false }) productSaleElement: ElementRef;
  constructor(private productState: ProductState) {

  }
  ngAfterViewInit(): void {
    this.productSaleElement.nativeElement.classList.add('heightAfter');
  }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{

    this.productState.$listProduct.subscribe(res => this.changeListProduct())
  }
  changeListProduct(): void{
    const listProduct = this.productState.getListProductSubject();
    if(listProduct){
      this.listProductSale = listProduct.filter(res => {
        return res;
      });
      if(this.listProductSale.length > 0){
        this.loaderStatus = true;
        this.productSaleElement.nativeElement.classList.remove('heightAfter');
      }
    }
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
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
