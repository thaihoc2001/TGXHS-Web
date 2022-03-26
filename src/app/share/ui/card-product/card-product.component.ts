import {Component, Input, OnInit} from '@angular/core';
import {IohProduct} from "../../model/product/ioh-product";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input('productCard') productChildren: IohProduct;
  constructor() {
    console.log(this.productChildren);
  }

  ngOnInit(): void {
  }

}
