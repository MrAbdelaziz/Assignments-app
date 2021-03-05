import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../_services/auth.service';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 /* formGroup: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
      this.formGroup = new FormGroup(
        {
          email : new FormControl('', [Validators.required]),
          password : new FormControl('', [Validators.required])
        }
      );
  }

  login(): void {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        result => {
          if (result.success){
            console.log(result);
            alert(result.message);
          }
        }
      );
    }

  }*/

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  username: string;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorage.getUser();
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        console.log(data.data.username);
        this.tokenStorage.saveToken(data.token);
        let role;
        if (data.data.role === 'ADMIN') {
          role = 'prof';
        }else{
          role = 'student';
        }
        this.tokenStorage.saveUser(data.data.username, data.data.groupe , role);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.username = this.tokenStorage.getUser();
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
