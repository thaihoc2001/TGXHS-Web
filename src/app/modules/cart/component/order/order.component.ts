import { Component, OnInit } from '@angular/core';
import {OrdersState} from "../../../../share/states/orders/orders.state";
import {IohOrder} from "../../../../share/model/order/ioh-order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: IohOrder;
  constructor(private ordersState: OrdersState) { }

  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.ordersState.order$.subscribe(res => this.orderChange())
  }

  private orderChange(): void{
    const order = this.ordersState.getOrder();
    if(order){
      this.order = order;
    }
  }

  submit() {
    this.ordersState.createOrder(this.order.toPlain())
      .subscribe(res => {
        console.log(res);
      },
        error => {
        console.log(error);
        }
        )
  }
}
