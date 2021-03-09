import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import {AssignementService} from '../../../../../_services/assignement.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {DevoirService} from '../../../../../_services/devoir.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Assignement} from '../../../../../models/assignement.model';

@Component({
  selector: 'app-matiere-add-modal',
  templateUrl: './matiere-add-modal.component.html',
  styleUrls: ['./matiere-add-modal.component.scss']
})
export class MatiereAddModalComponent implements OnInit {


  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  private errorMessage: any;
  title: any;
  desc: any;
  groupe: any;
  nom: any;
  thumbnail: any;


  constructor(
    private tokenStorage: TokenStorageService,
    private assignementService: AssignementService,
    private snackBar: MatSnackBar,
    private router: Router,
    private  devoirService: DevoirService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<MatiereAddModalComponent>,
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
