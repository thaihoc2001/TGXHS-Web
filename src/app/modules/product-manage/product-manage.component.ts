import { Component, OnInit } from '@angular/core';
import {ProductState} from "../../share/states/product/product.state";

@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss']
})
export class ProductManageComponent implements OnInit {

  constructor(private productState: ProductState) {
    this.productState.getListProduct();
  }

  ngOnInit(): void {

  }

}
