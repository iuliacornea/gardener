import { Component, OnInit } from '@angular/core';

export class Theme {
  name: string
  href: string
}

@Component({
  selector: 'gar-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {

  themeLinkId = "themeLink"
  themes: Theme[] = [
    {
      name: 'THEME.PURPLE_GREEN',
      href: '/assets/purple-green.css'
    },
    {
      name: 'THEME.PINK_BLUEGREY',
      href: '/assets/pink-bluegrey.css'
    },
    {
      name: 'THEME.INDIGO_PINK',
      href: '/assets/indigo-pink.css'
    },
    {
      name: 'THEME.DEEPPURPLE_AMBER',
      href: '/assets/deeppurple-amber.css'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onThemeSwitch(theme: Theme): void {
    (document.getElementById(this.themeLinkId) as HTMLLinkElement).href = theme.href;
  }

}
