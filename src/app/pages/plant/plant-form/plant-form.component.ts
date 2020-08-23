import {Component, OnInit} from '@angular/core';
import {FeaturesConfigurationDto, GrowingConfigurationDto, PlantsService, PlantTypeDto} from '@com.iulia/gardener-api';

@Component({
  selector: 'gar-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent implements OnInit {

  plantDetails: PlantTypeDto = {
    name: '',
    featuresConfiguration: null,
    growingConfiguration: null
  };
  featuresConfig: FeaturesConfigurationDto = {};
  growingCofig: GrowingConfigurationDto = {};

  constructor(private plantsService: PlantsService) {
  }

  ngOnInit(): void {
  }

  toConsole() {
    this.plantDetails.growingConfiguration = this.growingCofig;
    this.plantDetails.featuresConfiguration = this.featuresConfig;
    this.plantsService.postPlant(this.plantDetails).subscribe(response => {
      console.log(response);
    });
    console.log(this.featuresConfig);
    console.log(this.growingCofig);
    console.log(this.plantDetails);
  }
}
