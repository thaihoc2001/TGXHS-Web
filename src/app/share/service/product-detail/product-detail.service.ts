import { Injectable } from '@angular/core';
import {ApiService} from "../_core/api.service";
import {Observable} from "rxjs";
import {IohProductDetail} from "../../model/product-detail/ioh-product-detail";
import {environment} from "../../../../environments/environment";
import {apiPath} from "../../constance/api-path";
import {map} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {IohProduct} from "../../model/product/ioh-product";

const apiUrl = environment.apiUrl;
const path = apiPath.product
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private apiService: ApiService) { }

  createProductDetail(productDetail: IohProductDetail): Observable<IohProductDetail>{
    const url = `${apiUrl}/${path.productDetail}`;
    return this.apiService.post(url, productDetail)
      .pipe(
        map((res: HttpResponse<any>) => {
          return IohProductDetail.fromJson(JSON.stringify(res.body))
        })
      )
  }
}
