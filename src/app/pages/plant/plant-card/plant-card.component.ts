import {Component, OnInit, Input} from '@angular/core';
import {PlantsService, PlantTypeDto, SpecimenDto} from '@iuliacornea/gardener-api';

@Component({
  selector: 'gar-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent {

  displayRequirements = false;

  @Input()
  plant: PlantTypeDto;

  @Input()
  specimen: SpecimenDto;

  toggleRequirements(): void {
    this.displayRequirements = !this.displayRequirements;
  }


}
