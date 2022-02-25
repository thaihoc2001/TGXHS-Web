import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USERNAME_KEY = 'username';
const REFRESH_TOKEN = 'refresh-token'
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

}
