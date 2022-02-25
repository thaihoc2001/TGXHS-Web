import { Injectable } from '@angular/core';
import {ApiService} from "../_core/api.service";
import {Observable} from "rxjs";
import {Token} from "../../model/token/token";
import {apiPath} from "../../constance/api-path";
import {environment} from "../../../../environments/environment";
import {HttpResponse} from "@angular/common/http";
import {map} from "rxjs/operators";

const apiUrl = environment.apiUrl;
const path = apiPath.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) { }

  login(username: string, password: string): Observable<Token>{
    const url = `${apiUrl}/${path.login}`;
    const loginData = {phone: username,password: password};
    return this.apiService.post(url, loginData)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return Token.fromJson(JSON.stringify(body));
        })
      );
  }
  refreshToken(refreshToken: string): Observable<Token>{
    const url = `${apiUrl}/${path.refreshToken}`;
    const refreshData = {token: refreshToken};
    return this.apiService.post(url, refreshData)
      .pipe(
        map((httpResponse: HttpResponse<any>) => {
          const body = httpResponse.body;
          return Token.fromJson(JSON.stringify(body));
        })
      );
  }
}
