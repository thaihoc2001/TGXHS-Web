  import {Component, OnInit} from '@angular/core';
  import {ProductState} from "../../../../share/states/product/product.state";
  import {IohProduct} from "../../../../share/model/product/ioh-product";
  import {ActivatedRoute} from "@angular/router";
  import {Observable} from "rxjs";

  @Component({
    selector: 'app-product-content',
    templateUrl: './product-content.component.html',
    styleUrls: ['./product-content.component.scss']
  })
  export class ProductContentComponent implements OnInit {
    listProduct: IohProduct[] = [];
    isdLoading: boolean;
    isBtn: boolean= false;
    constructor(private productState: ProductState,private router: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.getProduct();
      this.listenState();
      setTimeout(()=>{
        this.isdLoading = false;
      },1500);
    }
    getProduct(){
      const {id}= this.router.snapshot.params;
      const {list} = this.router.snapshot.queryParams;
      console.log(list);
      const count = this.productState.getCountNumber();
      this.productState.getProductByTypeAndCategory(id,count,list);
      // this.spinner();
    }
    spinner(){
      const is = this.productState.getIsReady();
      if (is === false){
        this.isdLoading = true
      }else {
        this.isdLoading = false;
      }
    }
    listenState(): void {
      this.productState.$listProduct
        .subscribe(res => {
          this.listProductChange();
          this.spinner();
        });
    }

    listProductChange(): void {
      const listProduct = this.productState.getListProductSubject();
      this.isBtn = this.productState.getIsBtn();
      if (listProduct) {
        this.listProduct = listProduct;
      }
    }
    formatCash(price: number) {
      const str = price.toString();
      return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
      })
    }
  }
