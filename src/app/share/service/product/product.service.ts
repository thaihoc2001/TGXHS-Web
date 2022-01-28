import { Injectable } from '@angular/core';
import {ApiService} from "../_core/api.service";
import {IohProduct} from "../../model/product/ioh-product";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {apiPath} from "../../constance/api-path";
import {map} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {IohProductCategoryModel} from "../../model/product/ioh-product-category.model";

const apiUrl = environment.apiUrl;
const path = apiPath.product
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }
  createProduct(product: IohProduct): Observable<IohProduct>{
    const url = `${apiUrl}/${path.product}`
    return this.apiService.postFormData(url, product)
      .pipe(
        map((res: HttpResponse<any>) => {
          return IohProduct.fromJson(JSON.stringify(res.body))
        })
      )
  }
  getProduct(): Observable<IohProduct[]>{
    const url = `${apiUrl}/${path.product}`
    return this.apiService.get(url)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = Array.isArray(response.body) ? response.body : [];
          return body.map(item => IohProduct.fromJson(JSON.stringify(item)));
        })
      )
  }

}
