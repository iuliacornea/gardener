import {Component, OnInit} from '@angular/core';
import {UserDto} from '@com.iulia/gardener-api';
import {LocalStorageHelper} from '../services/LocalStorageHelper';
import {Router} from '@angular/router';

@Component({
  selector: 'gar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  expandMenu = false;
  backgroundTransparent = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.setToolbarBackgroundTransparent());
  }

  switchTheme(): void {
    (document.getElementById('themeLink') as HTMLLinkElement).href = '/assets/indigo-pink.css';
  }

  getLogegdInUser(): UserDto {
    return LocalStorageHelper.retrieveUser();
  }

  logout(): void {
    LocalStorageHelper.removeUser();
    this.router.navigate(['/home']);
  }

  setToolbarBackgroundTransparent(): void {
    this.backgroundTransparent = window.pageYOffset < 40;
  }

}
