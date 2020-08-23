import {Component, Input, OnInit} from '@angular/core';
import {PlantTypeDto} from '@com.iulia/gardener-api';

@Component({
  selector: 'gar-plant-page',
  templateUrl: './plant-page.component.html',
  styleUrls: ['./plant-page.component.css']
})
export class PlantPageComponent implements OnInit {

  @Input()
  plant: PlantTypeDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
