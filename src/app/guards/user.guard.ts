import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  canActivate(): boolean{
    if (this.tokenStorage.getToken()) {
      return  true;
    }else{
      this.router.navigate(['/login']);

      return  false;
    }
  }
}
