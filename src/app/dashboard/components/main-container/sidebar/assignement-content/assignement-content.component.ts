import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { filter, map, pairwise, tap, throttleTime } from 'rxjs/operators';import {Assignement} from '../../../../../models/assignement.model';
import {AssignementService} from '../../../../../_services/assignement.service';

@Component({
  selector: 'app-assignement-content',
  templateUrl: './assignement-content.component.html',
  styleUrls: ['./assignement-content.component.scss']
})
export class AssignementContentComponent implements OnInit {

  assignments: Assignement[] = [];
  assignmentSelectionne: Assignement;

  // Pour la pagination
  page: number;
  nextPage = 1;
  limit = 10;
  countAssignments: number;

  @ViewChild('scroller') scroller: CdkVirtualScrollViewport;


  constructor(
    private ngZone: NgZone,
    private assignmentsService: AssignementService,
  ) { }

  ngOnInit(): void {
    this.getAssignments();
  }



  getAssignments(): void {
    if (!this.nextPage) { return; }
    this.assignmentsService
      .getAssignmentsPagine(this.nextPage, this.limit)
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

}
