import {Component, Input, OnInit} from '@angular/core';
import * as plantsFile from 'src/assets/plants.json';
import {PlantsService} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../../services/LocalStorageHelper';

@Component({
  selector: 'gar-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  @Input()
  plants = [];
  constructor(private plantTypeService: PlantsService) { }

  ngOnInit(): void {
    this.plantTypeService.getPlants(LocalStorageHelper.retrieveUser().token).subscribe( result =>
    {
     this.plants = result;
    });
  }

  userLoggedIn(): boolean {
    return !!LocalStorageHelper.retrieveUser();
  }

}
