import { Component, OnInit } from '@angular/core';
import * as plantsFile from 'src/assets/plants.json';

@Component({
  selector: 'gar-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants = []
  constructor() { }

  ngOnInit(): void {
    this.plants = (plantsFile as any).default
    console.log(this.plants)
  }

}
