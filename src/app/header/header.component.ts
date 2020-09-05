import {Component, OnInit} from '@angular/core';
import {UserDto} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../services/LocalStorageHelper';
import {ResolveEnd, Router} from '@angular/router';

@Component({
  selector: 'gar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  backgroundTransparent = false;
  isGardenPage = false;
  activeMenu = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (this.router.routerState.snapshot.url === '/home') {
        this.backgroundTransparent = true;
      } else {
        this.backgroundTransparent = false;
        this.activeMenu = '';
      }
      if (this.router.routerState.snapshot.url === '/garden') {
        this.isGardenPage = true;
      } else {
        this.isGardenPage = false;
      }
    });
    window.addEventListener('scroll', () => {
      if (this.router.routerState.snapshot.url === '/home') {
        this.setToolbarBackgroundTransparent();
        this.updateHeaderActiveLink();
      }
    });
  }

  getLoggedInUser(): UserDto {
    return LocalStorageHelper.retrieveUser();
  }

  logout(): void {
    LocalStorageHelper.removeUser();
    this.router.navigate(['/home']);
  }

  setToolbarBackgroundTransparent(): void {
    this.backgroundTransparent = window.pageYOffset < 40;
  }

  scrollSmooth(id: string): void {
    this.activeMenu = id;
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }

  updateHeaderActiveLink(): void {
    if (document.getElementById('about-us').getBoundingClientRect().top < 64) {
      this.activeMenu = 'about-us';
    } else if (document.getElementById('testimonials').getBoundingClientRect().top < 64) {
      this.activeMenu = 'testimonials';
    } else if (document.getElementById('home').getBoundingClientRect().top > -400) {
      this.activeMenu = 'home';
    }
  }

  loggedInUserIsAdmin(): boolean {
    return LocalStorageHelper.retrieveUser()?.role === 'ADMIN';
  }

}
