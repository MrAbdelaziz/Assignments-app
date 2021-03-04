import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Input, Component, Output, EventEmitter, OnInit, NgZone} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dash-login',
  templateUrl: './dash-login.component.html',
  styleUrls: ['./dash-login.component.scss']
})



export class DashLoginComponent  {

  @Input() error: string | null;
// @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private snackBar: MatSnackBar ){}





  submit(): void {
    if (this.form.valid) {
     // this.submitEM.emit(this.form.value);
      this.openError();
    }
  }


  openError(): void{
    this.snackBar.open('adak le mec', 'Close', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error', 'mat-primary']
    });
  }
}
