import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {filter, map, pairwise, tap, throttleTime} from 'rxjs/operators';
import {User} from '../../../../../models/user.model';
import {UserService} from '../../../../../_services/user.service';

@Component({
  selector: 'app-user-content',
  templateUrl: './user-content.component.html',
  styleUrls: ['./user-content.component.scss']
})
export class UserContentComponent implements OnInit {

  users: User[] = [];

  // Pour la pagination
  page: number;
  nextPage = 1;
  limit = 10;
  countUsers: number;
  public isAdmin: boolean;


  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;
  groupe: any;


  constructor(
    private ngZone: NgZone,
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.groupe = '';
    this.isAdmin = this.tokenStorage.getRole();
    this.getUsers();
  }


  getUsers(nextPage: number = 1, limit: number = 10): void {
    if (!this.nextPage) { return; }
    this.userService
      .getUsersPagine(this.nextPage, this.limit, this.groupe)
      .subscribe((data: any) => {
        this.page = data.page;
        this.nextPage = data.nextPage;
        this.countUsers = data.totalDocs;
        this.users = this.users.concat(data.docs);
      });
  }

  ngAfterViewInit() {
    console.log('After view init');
    this.scroller
      .elementScrolled()
      .pipe(
        // on transforme les evenements en distances par rapport au bas du scroll
        map((e) => {
          return this.scroller.measureScrollOffset('bottom');
        }),
        tap((val) => {
          // console.log(val);
        }),
        pairwise(),
        filter(([y1, y2]) => {
          return y2 < y1 && y2 < 140;
        }),
        throttleTime(200) // on n'enverra un subscribe que toutes les 200ms (on ignorera les evenements entre...)
      )
      .subscribe((_) => {
        console.log(
          '...Dans subscribe du scroller, je charge plus d\'assignments'
        );
        this.ngZone.run(() => {
          // this.addMoreAssignments();
          this.getUsers(); // déjà prêt car nextPage re-initialisé à chaque requête
        });
      });
  }

  openDialog(): void {
    // TODO  new modal (add user)
  }

  modifDialog(id: any): void {
    // TODO  new modal (user actions)
  }


  onSearchChange(value: any): void {
    this.page = 1;
    this.nextPage = 1;
    this.users.length = 0 ;
    this.getUsers();
  }
}
