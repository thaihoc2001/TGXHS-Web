import {Injectable, OnDestroy} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {TokenStorageService} from "../../service/token-storage/token-storage.service";
import {catchError, tap} from "rxjs/operators";
import {Token} from "../../model/token/token";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthState implements OnDestroy {

  constructor(private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  ngOnDestroy(): void {
  }

  login(username: string, password: string): Observable<any> {
    return this.authService.login(username, password).pipe(
      tap((token: Token) => this.setCookie(token)),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      })
    )
  }

  setCookie(token: Token): void {
    this.tokenStorageService.saveToken(token.accessToken.toString());
    this.tokenStorageService.saveRefreshToken(token.refreshToken.toString());
  }

  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }
  checkLogin(): void{
     return this.tokenStorageService.getToken() && this.tokenStorageService.getRefreshToken();
  }
}
