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
    isBtn: boolean= true;
    constructor(private productState: ProductState,private router: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.getProduct();
      this.listenState();
    }
    getProduct(){
      const {type,id}= this.router.snapshot.params;
      const count = this.productState.getCountNumber();
      if (type === 'category'){
        this.productState.getListProductOfCategory(id,count);
      }else {
        this.productState.getListProductOfType(id,count);
      }
      this.spinner();
    }
    spinner(){
      this.isdLoading = true;
      setTimeout ( () =>  {
        this.isdLoading = false;
      }, 1500 );
    }
    listenState(): void {
      this.productState.$listProduct
        .subscribe(res => {
          this.listProductChange();
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
