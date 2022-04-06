import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {apiPath} from "../../constance/api-path";
import {IohProduct} from "../../model/product/ioh-product";
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

const key = apiPath.cookie;
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private cookieService: LocalStorageService) { }
  public saveToken(token: string): void {
    this.cookieService.clear(key.ID_KEY);
    this.cookieService.store(key.ID_KEY, token);
  }
  public getToken(): any {
    return this.cookieService.retrieve(key.ID_KEY);
  }
  public saveRefreshToken(token: string): void {
    this.cookieService.clear(key.Refresh_Token);
    this.cookieService.store(key.Refresh_Token, token);
  }
  public getRefreshToken(): any {
    return this.cookieService.retrieve(key.Refresh_Token);
  }
  public signOut(): void {
    this.cookieService.clear();
  }
  public saveUsername(username: string): void {
    this.cookieService.store(key.USERNAME_KEY, username);
  }
  public getUsername(): void{
    this.cookieService.retrieve(key.USERNAME_KEY);
  }
  public addCart(product: any): void{
    this.cookieService.store(key.CART, JSON.stringify(product));
  }
  public getCartItem(): any{
    return this.cookieService.retrieve(key.CART) ? JSON.parse(this.cookieService.retrieve(key.CART)) : [];
  }
}
