import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../../../share/service/token-storage/token-storage.service";
import {IohOrder} from "../../../../share/model/order/ioh-order";
import {IohProductOrder} from "../../../../share/model/order/ioh-product-order";
import {OrderService} from "../../../../share/service/order/order.service";
import {OrdersState} from "../../../../share/states/orders/orders.state";

@Component({
  selector: 'app-info-buy',
  templateUrl: './info-buy.component.html',
  styleUrls: ['./info-buy.component.scss']
})
export class InfoBuyComponent implements OnInit {
  infoCustomerForm: any;
  listItemCart: any = [];
  total = 0;
  infoPayment: any;
  isCheckedShip = true;

  constructor(private formBuilder: FormBuilder,
              private storageService: TokenStorageService,
              private ordersState: OrdersState) {
  }

  ngOnInit(): void {
    this.getItemCart();
    this.initForm();
    this.initFormPay();
    this.sumTotal();
  }

  sumTotal(): void {
    this.listItemCart.map((res: any) => {
      const sum = res.product.priceNew * res.quantity;
      this.total += sum;
    })
  }

  getItemCart(): void {
    this.listItemCart = this.storageService.getCartItem();
    this.listItemCart.reverse()
  }

  initForm(): void {
    this.infoCustomerForm = this.formBuilder.group({
      lastName: new FormControl('Nguyen', Validators.required),
      firstName: new FormControl('Thai Hoc', Validators.required),
      phone: new FormControl('0942221865', Validators.required),
      email: new FormControl('thaihoc123@gmail.com', Validators.required),
      address: new FormControl('134 Võ Thị Sáu, Phường 8, Quận 3', Validators.required),
      message: new FormControl('Xin cam on', Validators.required)
    })
  }
  initFormPay(): void{
    this.infoPayment = this.formBuilder.group({
      ship: new FormControl(''),
      pay: new FormControl('')
    })
  }

  isControlValid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(formGroup: FormGroup, validation: any, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(formGroup: FormGroup, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  payment(): void {
    const order = new IohOrder();
    const productOrder = new IohProductOrder();
    const listProduct = new Array();
    this.listItemCart.map((res: any) => {
      const data = {
        productId: res.product.productId,
        quantity: res.quantity
      }
      listProduct.push(data);
    })
    order.firstName = this.infoCustomerForm.get('firstName').value;
    order.lastName = this.infoCustomerForm.get('lastName').value;
    order.phone = this.infoCustomerForm.get('phone').value;
    order.address = this.infoCustomerForm.get('address').value;
    order.message = this.infoCustomerForm.get('message').value;
    order.email = this.infoCustomerForm.get('email').value;
    order.paymentMethod = this.infoPayment.get('pay').value;
    order.shippingMethod = this.infoPayment.get('ship').value;
    order.total = this.total;
    order.listProduct = listProduct;
    if(order){
      this.storageService.addUser(order);
    }
  }

  clickPayOption(): void{
    this.isCheckedShip = !this.isCheckedShip;
  }
}
