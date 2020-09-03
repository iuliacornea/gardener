import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gar-gardener-card',
  templateUrl: './gardener-card.component.html',
  styleUrls: ['./gardener-card.component.css']
})
export class GardenerCardComponent implements OnInit {

  displayLastStatistics = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleInfoDisplay(): void {
    this.displayLastStatistics = !this.displayLastStatistics;
  }

}
