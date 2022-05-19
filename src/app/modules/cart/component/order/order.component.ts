import {Component, OnInit} from '@angular/core';
import {OrdersState} from "../../../../share/states/orders/orders.state";
import {IohOrder} from "../../../../share/model/order/ioh-order";
import {TokenStorageService} from "../../../../share/service/token-storage/token-storage.service";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: IohOrder;
  listItemCart: any = [];
  total = 0;

  constructor(private ordersState: OrdersState,
              private storageService: TokenStorageService,
              private notifyService: NotifyService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.listenState();
    this.getItemCart();
    this.sumTotal();
  }

  listenState(): void {
    // this.ordersState.order$.subscribe(res => this.orderChange())
    this.order = this.storageService.getUser();
    console.log(this.order);
  }

  private orderChange(): void {
    const order = this.ordersState.getOrder();
    console.log(order);
    if (order) {
      this.order = order;
      console.log(this.order);
      console.log(this.order.lastName);
    }
  }

  submit() {
    console.log(this.order);
    const order = new IohOrder();
    this.createOrder(order);
  }

  createOrder(iohOrder: IohOrder): void {
    iohOrder.total = this.order.total;
    iohOrder.shippingMethod = this.order.shippingMethod;
    iohOrder.paymentMethod = this.order.paymentMethod;
    iohOrder.address = this.order.address;
    iohOrder.firstName = this.order.firstName;
    iohOrder.lastName = this.order.lastName;
    iohOrder.listProduct = this.order.listProduct;
    iohOrder.email = this.order.email;
    iohOrder.message = this.order.message;
    iohOrder.phone = this.order.phone;
    this.ordersState.createOrder(iohOrder.toPlain())
      .subscribe(res => {
        this.router.navigate(['/cart/order-complete']);
        this.notifyService.success("Thanh toán hóa đơn thành công");
        this.storageService.clearOrder();
        console.log(res);
        },
        error => {
          this.notifyService.error("Thanh toán hóa đơn thất bại");
          console.log(error);
        }
      )
  }

  getItemCart(): void {
    this.listItemCart = this.storageService.getCartItem();
    console.log(this.listItemCart);
  }

  sumTotal(): void {
    this.listItemCart.map((res: any) => {
      const sum = res.product.priceNew * res.quantity;
      this.total += sum;
    })
  }

}
