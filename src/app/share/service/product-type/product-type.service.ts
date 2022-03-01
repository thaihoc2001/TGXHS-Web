import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {apiPath} from "../../constance/api-path";
import {ApiService} from "../_core/api.service";
import {IohProductTypeModel} from "../../model/product-type/ioh-product-type.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";

const apiUrl = environment.apiUrl;
const path = apiPath.product
@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private apiService: ApiService) { }

  createProductType(productTypeModel: IohProductTypeModel): Observable<IohProductTypeModel>{
    const url = `${apiUrl}/${path.productType}`;
    return this.apiService.post(url, productTypeModel)
      .pipe(
        map((response: HttpResponse<any>) => {
          return IohProductTypeModel.fromJson(JSON.stringify(response.body))
        })
      )
  }

  getProductType(): Observable<IohProductTypeModel[]>{
    const url = `${apiUrl}/${path.productType}`
    return this.apiService.get(url)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = Array.isArray(response.body) ? response.body : [];
          return body.map(item => IohProductTypeModel.fromJson(JSON.stringify(item)));
        })
      )
  }
  deleteProductType(id: String): Observable<IohProductTypeModel>{
    const url = `${apiUrl}/${path.productType}/${id}`;
    return this.apiService.delete(url);
  }
}
