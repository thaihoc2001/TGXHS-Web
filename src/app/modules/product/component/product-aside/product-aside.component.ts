import { Component, OnInit } from '@angular/core';
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";

@Component({
  selector: 'app-product-aside',
  templateUrl: './product-aside.component.html',
  styleUrls: ['./product-aside.component.scss']
})
export class ProductAsideComponent implements OnInit {
  listProductType: IohProductTypeModel[] = [];
  constructor(private productTypeState: ProductTypeState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productTypeState.$listProductType.subscribe(res => this.productTypeChange())
  }
  productTypeChange(): void{
    const listProductType = this.productTypeState.getProductType();
    if(listProductType){
      this.listProductType = listProductType;
      console.log(this.listProductType);
    }
  }
}
