import { Injectable } from '@angular/core';
import {ApiService} from "../_core/api.service";
import {environment} from "../../../../environments/environment";
import {apiPath} from "../../constance/api-path";
import {IohProduct} from "../../model/product/ioh-product";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {IohProductCategoryModel} from "../../model/categories/ioh-product-category.model";

const apiUrl = environment.apiUrl;
const path = apiPath.product
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private apiService: ApiService) { }
  createProductCategory(productCategory: IohProductCategoryModel): Observable<IohProductCategoryModel>{
    const url = `${apiUrl}/${path.productCategory}`
    return this.apiService.post(url, productCategory)
      .pipe(
        map((res: HttpResponse<any>) => {
          return IohProductCategoryModel.fromJson(JSON.stringify(res))
        })
      )
  }

  getProductCategory(): Observable<IohProductCategoryModel[]>{
    const url = `${apiUrl}/${path.productCategory}`
    return this.apiService.get(url)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = Array.isArray(response.body) ? response.body : [];
          return body.map(item => IohProductCategoryModel.fromJson(JSON.stringify(item)));
        })
      )
  }
}
