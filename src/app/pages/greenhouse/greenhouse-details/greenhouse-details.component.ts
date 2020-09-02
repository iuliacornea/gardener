import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {GreenhouseService} from 'src/app/pages/greenhouse/greenhouse.service';

type Mode = {
  type: string,
  soilHumidity?: number,
  days?: number,
  milliliters?: number
}

type Greenhouse = {
  mode?: Mode,
  airTemperature: number,
  airHumidity: number,
  soilHumidity: number
}

@Component({
  selector: 'gar-greenhouse-details',
  templateUrl: './greenhouse-details.component.html',
  styleUrls: ['./greenhouse-details.component.css']
})
export class GreenhouseDetailsComponent implements OnInit {

  greenhouse: Greenhouse;
  ipFormControl = new FormControl();
  modeFormControl = new FormControl();
  soilHumidityThrehsoldFormControl = new FormControl();
  daysIntervalFormControl = new FormControl();
  millilitersFormControl = new FormControl();

  constructor(private service: GreenhouseService) {
  }

  ngOnInit(): void {
    if (!!this.service.getGreenhouseIp) {
      this.getGreenhouseDetails();
    }
  }

  onConnect(): void {
    this.service.setGreenhouseIp(this.ipFormControl.value);
    this.getGreenhouseDetails();
  }

  onSetModeControl(): void {
    if (this.modeFormControl.value == 'MAINTAIN_SOIL_HUMIDITY') {
      let mode = {
        type: 'MAINTAIN_SOIL_HUMIDITY',
        soilHumidity: this.soilHumidityThrehsoldFormControl.value
      };
      console.log(mode);
      this.service.postGreenhouseOperatingMode(mode).subscribe(response => {
        this.greenhouse = response;
        console.log(this.greenhouse);
      });
    }
    if (this.modeFormControl.value == 'WATER_REGULARY') {
      let mode = {
        type: 'WATER_REGULARY',
        days: this.daysIntervalFormControl.value,
        milliliters: this.millilitersFormControl.value
      };
      console.log(mode);
      this.service.postGreenhouseOperatingMode(mode).subscribe(response => {
        this.greenhouse = response;
        console.log(this.greenhouse);
      });
    }
  }

  getGreenhouseDetails() {
    this.service.getGreenhouseDetails().subscribe(response => {
      this.greenhouse = response;
      console.log(response);
    });
  }

}
