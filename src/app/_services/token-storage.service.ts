import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const GROUPE_KEY = 'user-groupe';
const ROLE_KEY = 'user-role';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    console.log(token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any, groupe: any , role: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(GROUPE_KEY);
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    window.sessionStorage.setItem(GROUPE_KEY, JSON.stringify(groupe));
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(role));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return user;
    }
    return {};
  }
}
