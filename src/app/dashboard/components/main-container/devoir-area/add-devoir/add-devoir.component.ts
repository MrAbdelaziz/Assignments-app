import {Component, NgZone, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import {AssignementService} from '../../../../../_services/assignement.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DevoirService} from '../../../../../_services/devoir.service';
import {Devoire} from '../../../../../models/devoire.model';
import {filter} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';

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

  constructor(    private ngZone: NgZone,
                  private tokenStorage: TokenStorageService,
                  private assignementService: AssignementService ,
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
      this.devoirs = [];
      this.getAssignment();
    });

  }

  ngOnInit(): void {

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
    console.log("devoirs");
   // if (!this.nextPage) { return; }
    this.devoirService
      .getDevoirsPagine(this.nextPage, this.limit, this.assignmentTransmis._id, this.tokenStorage.getUser().id)
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
      height: '400px',
      data: { assid: this.assignmentTransmis._id, userid: this.tokenStorage.getUser().id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
