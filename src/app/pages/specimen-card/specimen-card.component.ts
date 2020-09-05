import {Component, Input, OnInit} from '@angular/core';
import {GreenhouseService, GreenhouseStatsDto, Season, SpecimenDto} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../services/LocalStorageHelper';

@Component({
  selector: 'gar-specimen-card',
  templateUrl: './specimen-card.component.html',
  styleUrls: ['./specimen-card.component.css']
})
export class SpecimenCardComponent implements OnInit {

  @Input()
  specimen: SpecimenDto;

  statistics: GreenhouseStatsDto[];
  lastStatistic: GreenhouseStatsDto;

  constructor(private statisticsService: GreenhouseService) {
  }

  ngOnInit(): void {
    this.loadStatistics();
  }

  private loadStatistics(): void {
    this.statisticsService.getStats(LocalStorageHelper.userToken(), null, this.specimen.id).subscribe(response => {
      this.statistics = response.sort((a, b) => {
        return new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime();
      });
      this.lastStatistic = this.statistics.length > 0 && this.statistics[0];
    });
  }

  get minTemperature(): number {
    return this.specimen.season === Season.SUMMER || this.specimen.season === Season.SPRING
      ? this.specimen.plantType.growingConfiguration.airTemperatureSummerMin
      : this.specimen.plantType.growingConfiguration.airTemperatureWinterMin;
  }

  get maxTemperature(): number {
    return this.specimen.season === Season.SUMMER || this.specimen.season === Season.SPRING
      ? this.specimen.plantType.growingConfiguration.airTemperatureSummerMax
      : this.specimen.plantType.growingConfiguration.airTemperatureWinterMax;
  }

  get minSoilMoisture(): number {
    return this.specimen.season === Season.SUMMER || this.specimen.season === Season.SPRING
      ? this.specimen.plantType.growingConfiguration.soilMoistureSummerMin
      : this.specimen.plantType.growingConfiguration.soilMoistureWinterMin;
  }

  get maxSoilMoisture(): number {
    return this.specimen.season === Season.SUMMER || this.specimen.season === Season.SPRING
      ? this.specimen.plantType.growingConfiguration.soilMoistureSummerMax
      : this.specimen.plantType.growingConfiguration.soilMoistureWinterMax;
  }
}
