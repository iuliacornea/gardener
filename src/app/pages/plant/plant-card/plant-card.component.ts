import {Component, OnInit, Input} from '@angular/core';
import {PlantsService, PlantTypeDto, SpecimenDto} from '@com.iulia/gardener-api';

@Component({
  selector: 'gar-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent {

  @Input()
  plant: PlantTypeDto;

  @Input()
  specimen: SpecimenDto;


}
