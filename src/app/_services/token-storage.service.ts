import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

const TOKEN_KEY = 'auth-token';
const USER_AUTH = 'auth-user';
/*const GROUPE_KEY = 'user-groupe';
const ROLE_KEY = 'user-role';
const USER_ID = 'user-id';*/

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

  public saveToken(token: string): void {
    console.log(token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User): void {

    window.sessionStorage.removeItem(USER_AUTH);
    window.sessionStorage.setItem(USER_AUTH, JSON.stringify(user));

  }

  public getUser(): any {
    const user =  JSON.parse(window.sessionStorage.getItem(USER_AUTH));
    if (user) {
      return user;
    }
    return {};
  }

  public getRole(): any {
    const user =  JSON.parse(window.sessionStorage.getItem(USER_AUTH));
    return user.role === 'ADMIN';
  }
}
