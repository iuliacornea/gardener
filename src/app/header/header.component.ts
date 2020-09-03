import {Component, OnInit} from '@angular/core';
import {UserDto} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../services/LocalStorageHelper';
import {ActivatedRoute, ActivatedRouteSnapshot, ResolveEnd, Router} from '@angular/router';
import {element} from 'protractor';

@Component({
  selector: 'gar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  expandMenu = false;
  backgroundTransparent = false;
  activeMenu = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof ResolveEnd) {
        if (event.url === '/home') {
          this.backgroundTransparent = true;
        } else {
          this.backgroundTransparent = false;
          this.activeMenu = '';
        }
      }
    });
    window.addEventListener('scroll', () => {
      if (this.router.isActive('/home', true)) {
        this.setToolbarBackgroundTransparent();
        this.updateHeaderActiveLink();
        this.backgroundTransparent = false;
      }
    });
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

  scrollSmooth(id: string): void {
    this.activeMenu = id;
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }

  updateHeaderActiveLink(): void {
    if (document.getElementById('about-us').getBoundingClientRect().top < 64) {
      this.activeMenu = 'about-us';
    } else if (document.getElementById('testimonials').getBoundingClientRect().top < 64) {
      this.activeMenu = 'testimonials';
    } else if (document.getElementById('home').getBoundingClientRect().top > - 400) {
      this.activeMenu = 'home';
    }
  }

}
