import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AuthenticationService, UserDto} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {Router} from '@angular/router';

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

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
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
      this.router.navigate(['/plant-list']);
    });
  }

  signUp(): void {
    if (this.password.value !== this.password2.value) {
      alert('Passwords must match');
      return;
    }
    const user: UserDto = {
      email: this.email.value,
      username: this.userName.value,
      password: this.password.value
    };
    this.authenticationService.signUpUser(user).subscribe(response => {
      alert('response');
      console.log(response);
    });
  }
}
