import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthenticationService, UserDto, UserRole} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarHelper} from '../../services/SnackBarHelper';

@Component({
  selector: 'gar-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl();
  userName = new FormControl();
  password = new FormControl();
  password2 = new FormControl();

  selectedTabIndex = 0;


  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const user: UserDto = {
      email: this.email.value,
      password: this.password.value
    };
    this.authenticationService.loginUser(user).subscribe(response => {
      LocalStorageHelper.storeUser(response);
      this.router.navigate(['/garden']);
    }, error => {
      let message = 'There was an error while logging in.';
      if (error.status === 401) {
        message = 'No user with given e-mail exists';
      }
      if (error.status === 417) {
        message = 'Incorrect password';
      }
      this._snackBar.open(message, null, SnackBarHelper.error);
    });
  }

  signUp(): void {
    if (this.password.value !== this.password2.value) {
      this._snackBar.open('Passwords must match', null, SnackBarHelper.error);
      return;
    }
    if (this.userName.value === null || this.userName.value === '') {
      this._snackBar.open('Username must not be empty', null, SnackBarHelper.error);
      return;
    }
    const user: UserDto = {
      email: this.email.value,
      username: this.userName.value,
      password: this.password.value,
      role: UserRole.USER
    };
    this.authenticationService.signUpUser(user).subscribe(response => {
      this._snackBar.open('Sign up successful', null, SnackBarHelper.success);
      this.resetForm();
      this.selectedTabIndex = 0;
    });
  }

  private resetForm(): void {
    this.userName.reset();
    this.email.reset();
    this.password.reset();
    this.password2.reset();
  }
}
