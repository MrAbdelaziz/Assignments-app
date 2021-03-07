import {Component, OnInit} from '@angular/core';
import {AuthService} from './_services/auth.service';
import {TokenStorageService} from './_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignements-app';
  public isLoggedIn: boolean;
  public isAdmin: boolean;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isAdmin = this.tokenStorage.getRole();
      this.isLoggedIn = true;
    }


  }

}
