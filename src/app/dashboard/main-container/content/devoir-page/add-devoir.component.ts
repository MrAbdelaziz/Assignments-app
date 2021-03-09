import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {TokenStorageService} from '../../../../_services/token-storage.service';
import {AssignementService} from '../../../../_services/assignement.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DevoirService} from '../../../../_services/devoir.service';
import {Devoire} from '../../../../models/devoire.model';
import {filter, map, pairwise, tap, throttleTime} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from './add-modal/modal.component';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {ModalEditComponent} from './edit-modal/modal-edit.component';

@Component({
  selector: 'app-add-devoir',
  templateUrl: './add-devoir.component.html',
  styleUrls: ['./add-devoir.component.scss']
})
export class AddDevoirComponent implements OnInit {

  assignmentTransmis: any;


  devoirs: Devoire[] = [];
  // Pour la pagination
  page: number;
  nextPage = 1;
  limit = 10;
  countDevoirs: number;
  public isAdmin: boolean;
  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;

  constructor(private ngZone: NgZone,
              private tokenStorage: TokenStorageService,
              private assignementService: AssignementService,
              private devoirService: DevoirService,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
    /*    router.events.subscribe((val) => {
          if (val instanceof URLcha){

          }
        });*/

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log(event.url);
      this.devoirs.length = 0;
      this.nextPage = 1;
      this.getAssignment();
    });

  }

  ngOnInit(): void {
    this.isAdmin = this.tokenStorage.getRole();
  }

  getAssignment(): void {
    console.log('get');
    const id: number = this.route.snapshot.params.id;
    this.assignementService.getAssignment(id).subscribe((assignment) => {
      this.assignmentTransmis = assignment;
      console.log(this.assignmentTransmis);
      this.getDeVOIRS();
    });

  }

  getDeVOIRS(): void {
    console.log('devoirs');
    console.log(this.nextPage);
    if (this.nextPage === null) {
      return;
    }
    this.devoirService
      .getDevoirsPagine(this.nextPage, this.limit, this.assignmentTransmis._id, this.tokenStorage.getUser().id, this.isAdmin)
      .subscribe((data: any) => {
        this.page = data.page;
        this.nextPage = data.nextPage;
        this.countDevoirs = data.totalDocs;
        console.log(data.docs);
        this.devoirs = this.devoirs.concat(data.docs);
      });
  }


  // getDevoires(): void {
  //   if (!this.nextPage) { return; }
  //   this.assignementService
  //     .getAssignmentsPagine(this.nextPage, this.limit)
  //     .subscribe((data: any) => {
  //       this.page = data.page;
  //       this.nextPage = data.nextPage;
  //       this.countAssignments = data.totalDocs;
  //       this.assignments = this.assignments.concat(data.docs);
  //     });
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {assid: this.assignmentTransmis._id, userid: this.tokenStorage.getUser().id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /*
    async reload(url: string): Promise<boolean> {
      await this.router.navigateByUrl('.', { skipLocationChange: true });
      return this.router.navigateByUrl(url);
    }
  */

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
          this.getDeVOIRS(); // déjà prêt car nextPage re-initialisé à chaque requête
        });
      });
  }

  modifDialog(id: number): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '500px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
