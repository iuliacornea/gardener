import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  expandMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchTheme(): void {
    (document.getElementById('themeLink') as HTMLLinkElement).href = '/assets/indigo-pink.css';
  }

}
