import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DevoirService} from '../../../../../_services/devoir.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Devoire} from '../../../../../models/devoire.model';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {



  private errorMessage: any;
  note: any;
  devoir: any;


  constructor(
    private snackBar: MatSnackBar,
    private  devoirService: DevoirService,
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.devoirService
      .getDevoir(this.id)
      .subscribe((reponse) => {
  /*        this.snackBar.open('Bien Ajouter', 'Close', {
            duration: 4000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['green-snackbar', 'login-snackbar'],
          });
          window.location.reload();*/

          this.devoir = reponse;
          console.log(this.devoir);
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



  onRenduClick(): void {

    this.devoir.note = this.note;
    this.devoir.type = 'Rendu';


    this.devoirService.updateDevoir(this.devoir).
    subscribe((reponse) => {
           this.snackBar.open('Devoir Rendu', 'Close', {
                  duration: 4000,
                  horizontalPosition: 'end',
                  verticalPosition: 'top',
                  panelClass: ['green-snackbar', 'login-snackbar'],
                });

           this.devoir = reponse;
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
   /* this.devoirService
      .addDevoir(newDevoir)
      .subscribe((reponse) => {}*/

  }

  onDeleteClick(): void {
    this.devoirService.deleteDevoir(this.id).
    subscribe((reponse) => {
        this.snackBar.open('Devoir bien supp', 'Close', {
          duration: 4000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['green-snackbar', 'login-snackbar'],
        });

        this.devoir = reponse;
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
