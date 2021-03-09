import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DevoirService} from '../../../../../../_services/devoir.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Assignement} from '../../../../../../models/assignement.model';
import {TokenStorageService} from '../../../../../../_services/token-storage.service';
import {AssignementService} from '../../../../../../_services/assignement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-devoir',
  templateUrl: './modal-devoir.component.html',
  styleUrls: ['./modal-devoir.component.scss']
})
export class ModalDevoirComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  private errorMessage: any;
  title: any;
  desc: any;
  groupe: any;


  constructor(
    private tokenStorage: TokenStorageService,
    private assignementService: AssignementService,
    private snackBar: MatSnackBar,
    private router: Router,
    private  devoirService: DevoirService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalDevoirComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      desc: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
      groupe: ['', Validators.required]
    });
  }


  onSubmit($event: MouseEvent): void {
    event.preventDefault();
    const user = this.tokenStorage.getUser().id;
    const newAssignment = new Assignement(this.title, this.desc, this.groupe, user);

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
