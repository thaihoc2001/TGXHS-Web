import {Component, Input, OnInit} from '@angular/core';
import {IohProduct} from "../../model/product/ioh-product";
import {TokenStorageService} from "../../service/token-storage/token-storage.service";
import {NotifyService} from "../../service/notify/notify.service";

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input('productCard') productChildren: IohProduct;

  constructor(private storageService: TokenStorageService,
              private  notifyService: NotifyService) {}

  ngOnInit(): void {
  }

  addItemToCart(product: IohProduct) {
    const data = {
      product: product,
      quantity: 1
    }
    // const listProduct = this.storageService.getCartItem() ? JSON.parse(this.storageService.getCartItem()) : [];
    const listProduct = this.storageService.getCartItem();
    const index = listProduct.findIndex((res: any) => res.product.productId === product.productId)
    if (index === -1) {
      listProduct.push(data);
      this.storageService.addCart(listProduct);
      this.notifyService.success('Thêm sản phẩm vào giỏ hàng thành công')
    } else {
      const quantity = listProduct[index].quantity;
      data.quantity = quantity + 1;
      listProduct.splice(index, 1);
      listProduct.push(data);
      this.storageService.addCart(listProduct);
      this.notifyService.success('Cập nhật sản phẩm vào giỏ hàng thành công')
    }
  }
}
