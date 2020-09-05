import {Component, OnInit} from '@angular/core';
import {GreenhouseService, GreenhouseStatsDto} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'gar-greenhouse-statistics',
  templateUrl: './greenhouse-statistics.component.html',
  styleUrls: ['./greenhouse-statistics.component.css']
})
export class GreenhouseStatisticsComponent implements OnInit {

  dataSource: GreenhouseStatsDto[] = [];
  gardenerId: string;
  specimenId: string;

  displayedColumns: string[] = ['receivedAt', 'soilMoisturePercentage', 'lightIntensityLux', 'airTemperatureCelsius', 'airHumidityPercentage', 'soilMoistureRaw', 'lightIntensityRaw'];

  constructor(private statisticsService: GreenhouseService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    this.gardenerId = routeSnapshot.paramMap.get('gardenerId') !== 'null' && routeSnapshot.paramMap.get('gardenerId');
    this.specimenId = routeSnapshot.paramMap.get('specimenId') !== 'null' && routeSnapshot.paramMap.get('specimenId');
    this.statisticsService.getStats(LocalStorageHelper.userToken(), this.gardenerId, this.specimenId).subscribe(response => {

      this.dataSource = response.sort((a, b) => {
        return new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime();
      });
    });
  }

}
