import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FeaturesConfigurationDto,
  FeaturesService,
  FlowerExistance,
  FlowerPetals,
  FlowerShape, GrowingConfigurationDto,
  LeafDivisionOfBlade,
  StemSpikes,
  StemType
} from '@iuliacornea/gardener-api';
import {LeafArrangementOnTheStem} from '@iuliacornea/gardener-api';
import {LeafSurface} from '@iuliacornea/gardener-api';
import {LeafTexture} from '@iuliacornea/gardener-api';
import {LeafVeinType} from '@iuliacornea/gardener-api';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'gar-plant-features-form',
  templateUrl: './plant-features-form.component.html',
  styleUrls: ['./plant-features-form.component.css']
})
export class PlantFeaturesFormComponent implements OnInit {

  @Input('value')
  get value(): FeaturesConfigurationDto {
    return this.featuresConfig;
  }

  set value(value: FeaturesConfigurationDto) {
    this.featuresConfig = value;
    this.valueChange.emit(this.featuresConfig);
  }

  @Output()
  valueChange: EventEmitter<FeaturesConfigurationDto> = new EventEmitter<FeaturesConfigurationDto>();

  featuresConfig: FeaturesConfigurationDto = {};

  stemType = [
    StemType.HERBACEOUS,
    StemType.WOODY,
    StemType.NOTVISIBLE
  ];

  stemSpikes = [
    StemSpikes.NO,
    StemSpikes.SOFT,
    StemSpikes.WOODY
  ];

  leafDivisionOfBlade = [
    LeafDivisionOfBlade.SIMPLE,
    LeafDivisionOfBlade.WITHLEAFLETS,
    LeafDivisionOfBlade.PINNATECOMPOUND,
    LeafDivisionOfBlade.PALMATECOMPOUND,
    LeafDivisionOfBlade.DOUBLECOMPOUND
  ];

  leafArrangementOnTheStem = [
    LeafArrangementOnTheStem.BASAL,
    LeafArrangementOnTheStem.WHORLED,
    LeafArrangementOnTheStem.ALTERNATE,
    LeafArrangementOnTheStem.OPPOSITE
  ];

  leafSurface = [
    LeafSurface.SMOOTH,
    LeafSurface.HAIRY,
    LeafSurface.WARTY,
    LeafSurface.PLEATED,
    LeafSurface.ROUGHENEDRIDGES,
    LeafSurface.GROOVED
  ];

  leafTexture = [
    LeafTexture.LEATHERY,
    LeafTexture.STICKY,
    LeafTexture.FLESHY,
    LeafTexture.GRASSY,
    LeafTexture.NEEDLE,
    LeafTexture.RUGOSE,
    LeafTexture.SPIKE
  ];

  leafVeinType = [
    LeafVeinType.ARCUATE,
    LeafVeinType.CROSSVENULATE,
    LeafVeinType.DICHTOMOUS,
    LeafVeinType.LONGITUDINAL,
    LeafVeinType.PALMATE,
    LeafVeinType.PARALLEL,
    LeafVeinType.PINNATE,
    LeafVeinType.RETICULATE,
    LeafVeinType.ROTATE
  ];

  flowerExistance = [
    FlowerExistance.NO,
    FlowerExistance.YES
  ];

  flowerShape = [
    FlowerShape.REGULAR,
    FlowerShape.IREGULAR
  ];

  flowerPetals = [
    FlowerPetals.FAN,
    FlowerPetals.SEPARATED,
    FlowerPetals.UNITED
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
