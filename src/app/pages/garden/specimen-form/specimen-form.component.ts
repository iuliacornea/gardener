import {Component, OnInit} from '@angular/core';
import {PlantsService, PlantTypeDto, SpecimenDto, SpecimensService} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../../services/LocalStorageHelper';
import {Router} from '@angular/router';

@Component({
  selector: 'gar-specimen-form',
  templateUrl: './specimen-form.component.html',
  styleUrls: ['./specimen-form.component.css']
})
export class SpecimenFormComponent implements OnInit {

  specimen: SpecimenDto = {
    name: '',
    userId: LocalStorageHelper.retrieveUser().id
  };
  plantTypes: PlantTypeDto[];

  constructor(private plantTypesService: PlantsService,
              private specimenService: SpecimensService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.plantTypesService.getPlants(LocalStorageHelper.retrieveUser().token).subscribe(response => this.plantTypes = response);
  }

  onSave(): void {
    this.specimenService
      .postSpecimen(LocalStorageHelper.retrieveUser().token, this.specimen)
      .subscribe(() => this.router.navigate(['/garden']));
  }

}
