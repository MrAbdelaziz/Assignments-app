import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../../_services/token-storage.service';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: User;

  constructor( private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user =  this.tokenStorage.getUser();
    }
  }

  signout(): void {
    this.tokenStorage.signOut();
  }
}
