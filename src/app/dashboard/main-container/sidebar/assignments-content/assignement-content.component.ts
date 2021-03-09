import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {filter, map, pairwise, tap, throttleTime} from 'rxjs/operators';
import {Assignement} from '../../../../models/assignement.model';
import {AssignementService} from '../../../../_services/assignement.service';
import {TokenStorageService} from '../../../../_services/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalDevoirComponent} from './modal-devoir/modal-devoir.component';
import {ModalActionsComponent} from './modal-actions/modal-actions.component';

@Component({
  selector: 'app-assignement-content',
  templateUrl: './assignement-content.component.html',
  styleUrls: ['./assignement-content.component.scss']
})
export class AssignementContentComponent implements OnInit {

  assignments: Assignement[] = [];

  // Pour la pagination
  page: number;
  nextPage = 1;
  limit = 10;
  countAssignments: number;
  public isAdmin: boolean;


  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;
  groupe: string;


  constructor(
    private ngZone: NgZone,
    private tokenStorage: TokenStorageService,
    private assignmentsService: AssignementService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.isAdmin = this.tokenStorage.getRole();
    this.groupe = '';
    if (!this.isAdmin) {
      this.groupe = this.tokenStorage.getUser().groupe;
    }
    this.getAssignments();

  }


  getAssignments(nextPage: number = 1, limit: number = 10): void {
    if (!this.nextPage) {
      return;
    }
    this.assignmentsService
      .getAssignmentsPagine(this.nextPage, this.limit, this.groupe)
      .subscribe((data: any) => {
        this.page = data.page;
        this.nextPage = data.nextPage;
        this.countAssignments = data.totalDocs;
        this.assignments = this.assignments.concat(data.docs);
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
          this.getAssignments(); // déjà prêt car nextPage re-initialisé à chaque requête
        });
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDevoirComponent, {
      width: '500px',
      data: this.tokenStorage.getUser().id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  modifDialog(id: any): void {
    const dialogRef = this.dialog.open(ModalActionsComponent, {
      width: '500px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  onSearchChange(value: any): void {
    this.page = 1;
    this.nextPage = 1;
    this.assignments.length = 0;
    this.getAssignments();
  }
}
