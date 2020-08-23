import {Component, OnInit, Input} from '@angular/core';
import {PlantsService, PlantTypeDto} from '@com.iulia/gardener-api';

@Component({
  selector: 'gar-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent {

  @Input()
  plant: PlantTypeDto;


}
