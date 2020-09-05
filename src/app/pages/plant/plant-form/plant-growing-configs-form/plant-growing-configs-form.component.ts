import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FiveDegreeScale, GrowingConfigurationDto, SoilType} from '@iuliacornea/gardener-api';
import {FormControl, Validators} from '@angular/forms';

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

  growingConfigs: GrowingConfigurationDto;

  name = new FormControl('', Validators.required);
  airHumidityMin = new FormControl('');
  airHumidityMax = new FormControl('');
  airTemperatureSummerMin = new FormControl('');
  airTemperatureSummerMax = new FormControl('');
  airTemperatureWinterMin = new FormControl('');
  airTemperatureWinterMax = new FormControl('');
  lightIntensityMin = new FormControl('');
  lightIntensityMax = new FormControl('');
  soilMoistureSummerMin = new FormControl('');
  soilMoistureSummerMax = new FormControl('');
  soilMoistureWinterMin = new FormControl('');
  soilMoistureWinterMax = new FormControl('');
  wateringIntervalDays = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
  }

}
