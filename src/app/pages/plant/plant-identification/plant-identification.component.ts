import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as questionaire from 'src/assets/questionaire.json';

export interface Translatable {
  ro: string;
  en: string;
}

export interface Hypothesis {
  id: string;
  hypothesis: Translatable
}

export interface Answer {
  yes: Question | Hypothesis;
  no: Question | Hypothesis;

}

export interface Question {
  id: string;
  question: Translatable;
  answer: Answer;
}


@Component({
  selector: 'gar-plant-identification',
  templateUrl: './plant-identification.component.html',
  styleUrls: ['./plant-identification.component.css']
})
export class PlantIdentificationComponent implements OnInit {

  dialogData;
  constructor(public dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(PlantIdentificationDialog, {
      width: '640px',
      data: this.dialogData
    });
  }

  ngOnInit(): void {
    this.dialogData = (questionaire as any).default
  }

}


@Component({
  selector: 'plant-identification-dialog',
  templateUrl: 'plant-identification-dialog.html',
  styleUrls: ['./plant-identification.component.css']
})
export class PlantIdentificationDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Question | Hypothesis) { }

  onAnswer(next: Question | Hypothesis) {
      this.data = next;
  }


  isHypothesis( toBeDetermined: Question | Hypothesis): toBeDetermined is Hypothesis {
    if((toBeDetermined as Hypothesis).hypothesis) {
      return true
    }
    return false
  }
}




