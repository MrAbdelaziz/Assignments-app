import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Assignement} from '../../../../../models/assignement.model';
import {DevoirService} from '../../../../../_services/devoir.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Devoire} from '../../../../../models/devoire.model';

export interface DialogData {
  assid: string;
  userid: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  question: any;
  reponse: any;
  private errorMessage: any;


  constructor(
    private snackBar: MatSnackBar,
    private  devoirService: DevoirService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      question: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      reponse: ['', Validators.required]
    });
  }


  onSubmit($event: MouseEvent): void{

   // on va utiliser directement le service
    const newDevoir = new Devoire();
      newDevoir.title = this.question;
      newDevoir.remarques = this.reponse;
      newDevoir.assignment = this.data.assid;
      newDevoir.user = this.data.userid;
      newDevoir.type = 'EN ATTENTE';
      newDevoir.note = 0;
    this.devoirService
      .addDevoir(newDevoir)
      .subscribe((reponse) => {
          this.snackBar.open('Bien Ajouter', 'Close', {
            duration: 4000,
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['green-snackbar', 'login-snackbar'],
          });
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
