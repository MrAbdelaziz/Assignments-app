import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../_services/auth.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model';

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
  user: User;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorage.getUser().username;
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

        this.user = new User(
          data.data._id,
          data.data.name,
          data.data.username,
          data.data.email,
          data.data.role,
          data.data.groupe,
          data.data.matiere);
        this.tokenStorage.saveUser(this.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/']);

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

  logout(): void {
    this.tokenStorage.signOut();
  }
}
