import { Injectable } from '@angular/core';
import {IohProduct} from "../../model/product/ioh-product";

const TOKEN_KEY = 'auth-token';
const USERNAME_KEY = 'username';
const REFRESH_TOKEN = 'refresh-token';
const CART = 'cart';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESH_TOKEN);
    window.sessionStorage.setItem(REFRESH_TOKEN, token);
  }
  public getRefreshToken(): any {
    return sessionStorage.getItem(REFRESH_TOKEN);
  }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveUsername(username: string): void {
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
  public getUsername(): void{
    window.sessionStorage.getItem(USERNAME_KEY);
  }
  public logout(): void{
    window.sessionStorage.clear();
  }
  public addCart(product: IohProduct[]): void{
    window.sessionStorage.setItem(CART, JSON.stringify(product));
  }
  public getCartItem(): any {
    return window.sessionStorage.getItem(CART);
  }
}
