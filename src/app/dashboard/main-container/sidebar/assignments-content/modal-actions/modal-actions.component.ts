import {Component, Inject, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import {AssignementService} from '../../../../../_services/assignement.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-modal-actions',
  templateUrl: './modal-actions.component.html',
  styleUrls: ['./modal-actions.component.scss']
})
export class ModalActionsComponent implements OnInit {


  private errorMessage: any;
  assignement: any;
  des: any;
  title: any;
  groupe: any;


  constructor(
    private tokenStorage: TokenStorageService,
    private assignementService: AssignementService,
    private snackBar: MatSnackBar,
    private router: Router,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.assignementService
      .getAssignment(this.id)
      .subscribe((reponse) => {
          this.assignement = reponse;
          console.log(this.assignement);
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


  onUpdateClick(): void {

    this.assignement.title = this.title;
    this.assignement.des = this.des;
    this.assignement.groupe = this.groupe;

    this.assignementService.updateAssignement(this.assignement).subscribe((reponse) => {
        this.snackBar.open('Devoir Rendu', 'Close', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['green-snackbar', 'login-snackbar'],
        });

        this.assignement = reponse;
        window.location.reload();

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

  onDeleteClick(): void {
    this.assignementService.deleteDevoir(this.id).subscribe((reponse) => {
        this.snackBar.open('Devoir bien supp', 'Close', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['green-snackbar', 'login-snackbar'],
        });

        this.assignement = reponse;
        window.location.reload();

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

}
