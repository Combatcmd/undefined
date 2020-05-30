import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthServerProvider {
  constructor(
    private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService
  ) {}

  getToken() {
    return (
      this.$localStorage.retrieve('authenticationtoken') ||
      this.$sessionStorage.retrieve('authenticationtoken')
    );
  }

  getRefreshToken() {
    return (
      this.$localStorage.retrieve('refreshToken') ||
      this.$sessionStorage.retrieve('refreshToken')
    );
  }

  login(credentials): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic d2ViX2FwcDo=',
    });

    const str = `grant_type=${encodeURIComponent(
      'password'
    )}&password=${encodeURIComponent(
      credentials.password
    )}&username=${encodeURIComponent(
      credentials.username
    )}&g-recaptcha-response=${encodeURIComponent(
      credentials.gRecaptchaResponse
    )}&type=${encodeURIComponent(credentials.type)}${
      credentials.identifier
        ? '&identifier=' + encodeURIComponent(credentials.identifier)
        : ''
    }`;

    return this.http
      .post(`eprocuaa/oauth/token`, str, {
        headers,
      })
      .pipe(
        map((resp) => {
          const accessToken = resp['access_token'];
          const refreshToken = resp['refresh_token'];
          if (accessToken) {
            this.storeAuthenticationToken(accessToken, credentials.rememberMe);
          }
          if (refreshToken) {
            this.storeRefreshToken(refreshToken, credentials.rememberMe);
          }

          return accessToken;
        })
      );
  }

  refreshToken() {
    const type = encodeURIComponent('refresh_token');
    const token = this.getRefreshToken();
    const refToken = encodeURIComponent(token.toString());
    const str = `grant_type=${type}&refresh_token=${refToken}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer d2ViX2FwcDo=`,
    });
    return this.http.get(`eprocuaa/oauth/token?${str}`, { headers }).pipe(
      map(
        (resp) => {
          const accessToken = resp['access_token'];
          const refreshToken = resp['refresh_token'];
          if (accessToken) {
            this.storeAuthenticationToken(accessToken, false);
          }
          if (refreshToken) {
            this.storeRefreshToken(refreshToken, false);
          }

          return resp;
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  loginWithToken(jwt, rememberMe) {
    if (jwt) {
      this.storeAuthenticationToken(jwt, rememberMe);
      return Promise.resolve(jwt);
    } else {
      return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
    }
  }

  storeAuthenticationToken(jwt, rememberMe) {
    // if (rememberMe) {
    //     this.$localStorage.store('authenticationtoken', jwt);
    // } else {
    this.$localStorage.store('authenticationtoken', jwt);
    this.$sessionStorage.store('authenticationtoken', jwt);
    // }
  }

  storeRefreshToken(jwt, rememberMe) {
    // if (rememberMe) {
    //     this.$localStorage.store('refreshToken', jwt);
    // } else {
    this.$localStorage.store('refreshToken', jwt);
    this.$sessionStorage.store('refreshToken', jwt);
    // }
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this.$localStorage.clear('authenticationtoken');
      this.$sessionStorage.clear();
      observer.complete();
    });
  }
}
