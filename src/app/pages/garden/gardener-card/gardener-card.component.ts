import {Component, Input, OnInit} from '@angular/core';
import {GardenerDto, GreenhouseService, GreenhouseStatsDto, UserRole} from '@iuliacornea/gardener-api';
import {LocalStorageHelper} from '../../../services/LocalStorageHelper';

@Component({
  selector: 'gar-gardener-card',
  templateUrl: './gardener-card.component.html',
  styleUrls: ['./gardener-card.component.css']
})
export class GardenerCardComponent implements OnInit {

  @Input()
  gardener: GardenerDto;

  displayLastStatistics = true;
  lastStatistics: GreenhouseStatsDto;

  constructor(private grenhoseService: GreenhouseService) {
  }

  ngOnInit(): void {
    this.loadStatistics();
  }

  userToken(): string {
    return LocalStorageHelper.retrieveUser()?.role === UserRole.USER && LocalStorageHelper.retrieveUser().token;
  }

  private loadStatistics(): void {
    this.grenhoseService.getStats(this.userToken(), this.gardener.id, null).subscribe(response => {
      this.lastStatistics = response.length !== 0
        && response.sort((a, b) => {
          return new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime();
        })[0];
    });
  }
}
