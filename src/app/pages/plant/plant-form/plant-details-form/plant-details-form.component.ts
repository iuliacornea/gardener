import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlantTypeDto} from '@iuliacornea/gardener-api';

@Component({
  selector: 'gar-plant-details-form',
  templateUrl: './plant-details-form.component.html',
  styleUrls: ['./plant-details-form.component.css']
})
export class PlantDetailsFormComponent implements OnInit {


  @Input('value')
  get value(): PlantTypeDto {
    return this.plantDetails;
  }

  set value(value: PlantTypeDto) {
    this.plantDetails = value;
    this.valueChange.emit(this.plantDetails);
  }

  @Output()
  valueChange: EventEmitter<PlantTypeDto> = new EventEmitter<PlantTypeDto>();

  plantDetails: PlantTypeDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
