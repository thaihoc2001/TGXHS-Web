import {Component, Input, OnInit} from '@angular/core';
import {IohProduct} from "../../model/product/ioh-product";
import {TokenStorageService} from "../../service/storage/storage.service";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input('productCard') productChildren: IohProduct;
  constructor(private storageService: TokenStorageService) {
    console.log(this.productChildren);
  }

  ngOnInit(): void {
  }
  addItemToCart(product: IohProduct){
    if(product){
      const listProduct = this.storageService.getCartItem();
      listProduct.push(product);
      this.storageService.addCart(listProduct);
      console.log(listProduct);
    }
  }
}
