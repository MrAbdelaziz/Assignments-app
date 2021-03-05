import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient) {}

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout(): any {
    return this.http.post<any>(`logout`, {}).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  isLoggedIn(): any{
    console.log(this.getJwtToken());
    return !!this.getJwtToken();
  }


  getJwtToken(): any {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: string): void {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  private doLogoutUser(): void {
    this.loggedUser = null;
    this.removeTokens();
  }



  private storeTokens(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private removeTokens(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
