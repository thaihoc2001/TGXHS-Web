import { Injectable } from '@angular/core';
import {ApiService} from "../_core/api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {apiPath} from "../../constance/api-path";
import {IohOrder} from "../../model/order/ioh-order";

const apiUrl = environment.apiUrl;
const path = apiPath.order

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apiService: ApiService) { }
  getOrder(): Observable<IohOrder[]>{
    const url = `${apiUrl}/${path.order}`
    return this.apiService.get(url)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = Array.isArray(response.body) ? response.body : [];
          return body.map(item => IohOrder.fromJson(JSON.stringify(item)));
        })
      )
  }
  createOrder(order: IohOrder): Observable<IohOrder>{
    const url = `${apiUrl}/${path.order}`
    return this.apiService.post(url, order)
      .pipe(
        map((res: HttpResponse<any>) => {
          return IohOrder.fromJson(JSON.stringify(res.body))
        })
      )
  }
}
