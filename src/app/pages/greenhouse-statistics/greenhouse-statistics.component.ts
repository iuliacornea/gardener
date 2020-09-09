import {Component, OnInit} from '@angular/core';
import {GardenersService, GreenhouseService, GreenhouseStatsDto, SpecimensService} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Local} from 'protractor/built/driverProviders';

@Component({
    selector: 'gar-greenhouse-statistics',
    templateUrl: './greenhouse-statistics.component.html',
    styleUrls: ['./greenhouse-statistics.component.css']
})
export class GreenhouseStatisticsComponent implements OnInit {

    dataSource: GreenhouseStatsDto[] = [];
    gardenerId: string;
    specimenId: string;
    gardenerName: string;
    specimenName: string;

    displayedColumns: string[] = ['receivedAt', 'soilMoisturePercentage', 'lightIntensityLux', 'airTemperatureCelsius', 'airHumidityPercentage', 'soilMoistureRaw', 'lightIntensityRaw'];

    constructor(private statisticsService: GreenhouseService,
                private gardenersService: GardenersService,
                private specimensService: SpecimensService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const routeSnapshot = this.route.snapshot;
        this.gardenerId = routeSnapshot.paramMap.get('gardenerId') !== 'null' && routeSnapshot.paramMap.get('gardenerId');
        if (!!this.gardenerId) {
            this.gardenersService.getGardener(LocalStorageHelper.userToken(), this.gardenerId).subscribe(gardener => {
                this.gardenerName = gardener.name;
            });
        }
        this.specimenId = routeSnapshot.paramMap.get('specimenId') !== 'null' && routeSnapshot.paramMap.get('specimenId');
        if (!!this.specimenId) {
            this.specimensService.getSpecimen(this.specimenId, LocalStorageHelper.userToken()).subscribe(specimen => {
                this.specimenName = specimen.name;
            });
        }
        this.statisticsService.getStats(LocalStorageHelper.userToken(), this.gardenerId, this.specimenId).subscribe(response => {

            this.dataSource = response.sort((a, b) => {
                return new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime();
            });
        });
    }

}
