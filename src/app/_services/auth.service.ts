import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from '../../environments/environment';

const AUTH_API = baseUrl ;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'auth/login', {
      email,
      password
    }, httpOptions);
  }

  /* register(username: string, email: string, password: string): Observable<any> {
     return this.http.post(AUTH_API + 'signup', {
       username,
       email,
       password
     }, httpOptions);
   }*/
}
