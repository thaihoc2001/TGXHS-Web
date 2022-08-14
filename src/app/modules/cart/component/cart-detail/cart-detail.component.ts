import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from "../../../../share/service/token-storage/token-storage.service";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {
  listItemCart: any = [];
  total = 0;
  constructor(private storageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getItemCart();
    this.sumTotal();
  }
  getItemCart(): void{
    this.listItemCart = this.storageService.getCartItem();
    this.listItemCart && this.listItemCart.reverse();
  }

  removeItemCart(item: any): void {
    const index = this.listItemCart.findIndex((res:any) => res.product.productId === item.product.productId);
    this.listItemCart.splice(index, 1);
    this.storageService.addCart(this.listItemCart);
  }
  sumTotal(): void {
    this.listItemCart.map((res: any) => {
      const sum = res.product.priceNew * res.quantity;
      this.total += sum;
    })
  }
}
