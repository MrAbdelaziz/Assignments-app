import {Component, OnInit} from '@angular/core';
import {Assignement} from '../../../../../models/assignement.model';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import {AssignementService} from '../../../../../_services/assignement.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-assignement',
  templateUrl: './add-assignement.component.html',
  styleUrls: ['./add-assignement.component.scss']
})
export class AddAssignementComponent implements OnInit {
  title: any;
  description: any;
  groupe: any;
  private errorMessage: any;

  constructor(private tokenStorage: TokenStorageService, private assignementService: AssignementService,
              private router: Router, private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
  }

  onSubmit($event: MouseEvent): void {
    // evite la soumission standard du formulaire, qui génère un warning
    // dans la console...
    event.preventDefault();
    const user = this.tokenStorage.getUser().id;
    const newAssignment = new Assignement(this.title, this.description, this.groupe, user);

    console.log(newAssignment);

    // on va utiliser directement le service
    this.assignementService
      .addAssignment(newAssignment)
      .subscribe((reponse) => {
          this.snackBar.open('Bien Ajouter', 'Close', {
            duration: 4000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['green-snackbar', 'login-snackbar'],
          });
          this.back();
        },
        err => {
          this.errorMessage = err.error.errors;
          this.snackBar.open(this.errorMessage, 'Close', {
            duration: 4000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['red-snackbar', 'login-snackbar']
          });
        });

  }

  back(): void {
    this.router.navigate(['/home']);
  }
}
