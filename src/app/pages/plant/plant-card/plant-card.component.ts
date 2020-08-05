import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gar-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent implements OnInit {

  @Input()
  plant: any

  displayDescription = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.plant)
    console.log(this.plant.name)

  }

}
