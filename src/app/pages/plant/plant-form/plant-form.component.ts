import { Component, OnInit } from '@angular/core';

enum FormStructure {
  QUESTIONAIRE = 'QUESTIONAIRE',
  USER_CONFIG = 'USER_CONFIG'
}

@Component({
  selector: 'gar-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent implements OnInit {

  questionaire = FormStructure.QUESTIONAIRE
  userConfig = FormStructure.USER_CONFIG

  plantTypes = ['HERBACEOUS', 'WOODY']

  flowers = ['YES', 'NO']
  flowerShapeTypes = ['REGULAR', 'IREGULAR']
  flowerPetalTypes = ['UNITED', 'SEPARATED', 'FAN']
  flowerPetalCounts = ['MULTUPLE_OF_THREE', 'FOUR_OR_FIVE']

  leaves = ['YES', 'NO']
  leafTypes = ['GRASSY', 'GLOSSY', 'HAIRY', 'FLESHY', 'NEEDLE']
  leafBranchingPatternTypes = ['OPPOSITE', 'ALTERNATE', 'WHORLED', 'BASAL']
  leafVineTypes = ['PARALEL', 'RETICULATE', 'NONE']

  spikes = ['YES', 'NO']
  spikeLocationTypes = ['LEAF', 'STEM', 'ALL_OVER']
  
  stems = ['YES', 'NO']
  stemTypes = ['WOODY', 'FLESHY', 'WITH_AERIAL_ROOTS']



  constructor() { } 

  ngOnInit(): void {
  }

}
