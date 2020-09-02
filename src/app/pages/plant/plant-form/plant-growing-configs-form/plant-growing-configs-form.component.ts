import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FiveDegreeScale, GrowingConfigurationDto, SoilType} from '@iuliacornea/gardener-api';

@Component({
  selector: 'gar-plant-growing-configs-form',
  templateUrl: './plant-growing-configs-form.component.html',
  styleUrls: ['./plant-growing-configs-form.component.css']
})
export class PlantGrowingConfigsFormComponent implements OnInit {

  @Input('value')
  get value(): GrowingConfigurationDto {
    return this.growingConfigs;
  }

  set value(value: GrowingConfigurationDto) {
    this.growingConfigs = value;
    this.valueChange.emit(this.growingConfigs);
  }

  @Output()
  valueChange: EventEmitter<GrowingConfigurationDto> = new EventEmitter<GrowingConfigurationDto>();

  growingConfigs: GrowingConfigurationDto = {};

  fiveDegreeScale = [
    FiveDegreeScale.VERYLOW,
    FiveDegreeScale.LOW,
    FiveDegreeScale.MEDIUM,
    FiveDegreeScale.HIGH,
    FiveDegreeScale.VERYHIGH
  ];

  soilType = [
    SoilType.REGULAR,
    SoilType.CONIFERS,
    SoilType.ORCHID,
    SoilType.SUCCULENTS
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
