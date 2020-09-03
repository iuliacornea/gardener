import {Component, OnInit} from '@angular/core';
import {PlantTypeDto} from '@iuliacornea/gardener-api';

@Component({
  selector: 'gar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exemplePlantTypes: PlantTypeDto[] = [
    {
      name: 'Monstera',
      image: '',
      featuresConfiguration: null,
      growingConfiguration: null
    },
    {
      name: 'Aloe vera',
      image: '',
      featuresConfiguration: null,
      growingConfiguration: null
    },
    {
      name: 'Aloe vera',
      image: '',
      featuresConfiguration: null,
      growingConfiguration: null
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
