import {Component, OnInit, Input} from '@angular/core';
import {PlantTypeDto} from '@iuliacornea/gardener-api';

@Component({
  selector: 'gar-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
export class PlantCardComponent implements OnInit {

  displayRequirements = false;

  @Input()
  plant: PlantTypeDto;

  ngOnInit(): void {
    console.log(this.plant);
  }


}
