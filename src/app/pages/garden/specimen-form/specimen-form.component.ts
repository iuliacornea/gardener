import {Component, OnInit} from '@angular/core';
import {GardenerDto, GardenersService, PlantsService, PlantTypeDto, SpecimenDto, SpecimensService} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../../services/LocalStorageHelper';
import {ActivatedRoute, Router} from '@angular/router';

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
  gardeners: GardenerDto[];

  constructor(private plantTypesService: PlantsService,
              private specimenService: SpecimensService,
              private gardenerService: GardenersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.plantTypesService.getPlants(LocalStorageHelper.retrieveUser().token).subscribe(response => {
      this.plantTypes = response;
      this.loadSpecimen();
    });
    this.loadGardeners();
  }

  onSave(): void {
    this.specimenService
      .postSpecimen(LocalStorageHelper.retrieveUser().token, this.specimen)
      .subscribe(() => this.router.navigate(['/garden']));
  }

  private loadSpecimen(): void {
    const specimenId = this.activatedRoute.snapshot.paramMap.get('specimenId');
    if (specimenId !== null) {
      this.specimenService.getSpecimen(specimenId, LocalStorageHelper.userToken()).subscribe(response => {
        this.specimen = response;
        this.specimen.plantType = this.plantTypes.find(value => value.id === this.specimen.plantType.id);
      });
    }
  }

  private loadGardeners(): void {
    this.gardenerService.getGardeners(LocalStorageHelper.userToken()).subscribe(response => this.gardeners = response);
  }
}
