import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {apiPath} from "../../constance/api-path";

const key = apiPath.token
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private cookieService: CookieService) { }
  public saveToken(token: string): void {
    this.cookieService.delete(key.ID_KEY);
    this.cookieService.set(key.ID_KEY, token);
  }
  public getToken(): any {
    return this.cookieService.get(key.ID_KEY);
  }
  public saveRefreshToken(token: string): void {
    this.cookieService.delete(key.Refresh_Token);
    this.cookieService.set(key.Refresh_Token, token);
  }
  public getRefreshToken(): any {
    return this.cookieService.get(key.Refresh_Token);
  }
  public signOut(): void {
    this.cookieService.deleteAll();
  }
  public saveUsername(username: string): void {
    this.cookieService.set(key.USERNAME_KEY, username);
  }
  public getUsername(): void{
    this.cookieService.get(key.USERNAME_KEY);
  }
}
