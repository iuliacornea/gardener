import { Component, OnInit } from '@angular/core';
import * as plantsFile from 'src/assets/plants.json';
import {PlantsService} from '@com.iulia/gardener-api';

@Component({
  selector: 'gar-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants = [];
  constructor(private plantTypeService: PlantsService) { }

  ngOnInit(): void {
    this.plantTypeService.getPlants().subscribe( result =>
    {
      alert('check console for result');
      console.log(result);
    });
    this.plants = (plantsFile as any).default;
    console.log(this.plants);
  }

}
