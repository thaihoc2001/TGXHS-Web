import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../../share/service/token-storage/token-storage.service";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  listItemCart: any = [];
  constructor(private storageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getItemCart();
  }
  getItemCart(): void{
    this.listItemCart = this.storageService.getCartItem();
    console.log(this.listItemCart);
  }

}
