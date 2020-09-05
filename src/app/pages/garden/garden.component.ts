import {Component, OnInit} from '@angular/core';
import {GardenerDto, GardenersService, GreenhouseService, SpecimenDto, SpecimensService, UserRole} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {Router} from '@angular/router';

@Component({
  selector: 'gar-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  specimens: SpecimenDto[];
  gardeners: GardenerDto[];

  constructor(private specimenService: SpecimensService,
              private gardenerService: GardenersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadGardeners();
    this.specimenService.getSpecimens(LocalStorageHelper.retrieveUser().token).subscribe(resposne => this.specimens = resposne);
  }

  logout(): void {
    LocalStorageHelper.removeUser();
    this.router.navigate(['/home']);
  }

  loadGardeners(): void {
    this.gardenerService.getGardeners(this.userToken()).subscribe(response => {
      console.log(response);
      this.gardeners = response;
    });
  }

  userToken(): string {
    return LocalStorageHelper.retrieveUser()?.role === UserRole.USER && LocalStorageHelper.retrieveUser().token;
  }

  username(): string {
    return LocalStorageHelper.retrieveUser()?.username;
  }
}
