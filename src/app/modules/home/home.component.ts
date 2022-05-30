import { Component, OnInit } from '@angular/core';
import {ProductState} from "../../share/states/product/product.state";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productState: ProductState) {
    this.productState.getListProduct();
  }

  ngOnInit(): void {
  }

}
