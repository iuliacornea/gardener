import {Component, OnInit} from '@angular/core';
import {FeaturesConfigurationDto, GrowingConfigurationDto, PlantsService, PlantTypeDto} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../../services/LocalStorageHelper';
import {Router} from '@angular/router';

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
  featuresConfig: FeaturesConfigurationDto = {
    name: ''
  };
  growingCofig: GrowingConfigurationDto = {
    name: ''
  };

  constructor(private plantsService: PlantsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  toConsole(): void {
    this.plantDetails.growingConfiguration = this.growingCofig;
    this.plantDetails.featuresConfiguration = this.featuresConfig;
    this.plantDetails.userId = LocalStorageHelper.retrieveUser().id;
    this.plantsService.postPlant(LocalStorageHelper.retrieveUser().token, this.plantDetails).subscribe(response => {
      console.log(response);
      this.router.navigate(['plant-list']);
    });
    console.log(this.featuresConfig);
    console.log(this.growingCofig);
    console.log(this.plantDetails);
  }
}
