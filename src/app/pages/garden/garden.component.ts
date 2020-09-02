import { Component, OnInit } from '@angular/core';
import {SpecimenDto, SpecimensService} from '@com.iulia/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';

@Component({
  selector: 'gar-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  specimens: SpecimenDto[];
  constructor(private specimenService: SpecimensService) { }

  ngOnInit(): void {
    this.specimenService.getSpecimens(LocalStorageHelper.retrieveUser().token).subscribe(resposne => this.specimens = resposne);
  }

}
