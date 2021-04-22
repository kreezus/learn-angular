import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiBaseUrl = environment.apiUrl;
  jwtToken: string;

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.httpClient
      .post<{
        id_token: string;
      }>(`${this.apiBaseUrl}/authenticate`, {
        username,
        password,
        rememberMe: true,
      })
      .pipe(map((response) => (this.jwtToken = response.id_token)));
  }

  getJwt() {
    return this.jwtToken;
  }

  setJwt(token: string) {
    this.jwtToken = token;
  }

  isAuthenticated() {
    return this.jwtToken != null;
  }

  logout() {
    this.jwtToken = null;
  }
}
