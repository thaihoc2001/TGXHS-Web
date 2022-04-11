import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {catchError, finalize, first, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {ProductService} from "../../service/product/product.service";
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {ProductTypeService} from "../../service/product-type/product-type.service";
import {IohProductCategoryModel} from "../../model/categories/ioh-product-category.model";
import {IohProductTypeModel} from "../../model/product-type/ioh-product-type.model";
import {IohProduct} from "../../model/product/ioh-product";
import {Parser} from "@angular/compiler";
import {IohProductDetail} from "../../model/product-detail/ioh-product-detail";
import {ProductDetailService} from "../../service/product-detail/product-detail.service";
import {OrderService} from "../../service/order/order.service";
import {IohOrder} from "../../model/order/ioh-order";

@Injectable({
  providedIn: 'root'
})
export class OrdersState implements OnDestroy {

  private isReadySubject = new BehaviorSubject<boolean>(false);
  public isReady$ = this.isReadySubject.asObservable();

  private listOrderSubject = new BehaviorSubject<IohOrder[]>([]);
  public listOrder$ = this.listOrderSubject.asObservable();

  private orderSubject = new BehaviorSubject<IohOrder | null>(null);
  public order$ = this.orderSubject.asObservable();

  subscription: Subscription = new Subscription();

  constructor(private orderService: OrderService) {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setIsReady(isReady: boolean): void {
    this.isReadySubject.next(isReady);
  }

  getIsReady(): boolean {
    return this.isReadySubject.getValue();
  }

  setOder(iohOrder:IohOrder): void{
    this.orderSubject.next(iohOrder)
  }

  getOrder(): IohOrder | null{
    return this.orderSubject.getValue();
  }

  setListOder(iohOrder:IohOrder[]): void{
    this.listOrderSubject.next(iohOrder)
  }

  getListOrder(): IohOrder[]{
    return this.listOrderSubject.getValue();
  }

  createOrder(iohOrder: IohOrder): Observable<IohOrder> {
    this.setIsReady(false);
    return this.orderService.createOrder(iohOrder)
      .pipe(
        finalize(() => this.setIsReady(true))
      );
  }

}
