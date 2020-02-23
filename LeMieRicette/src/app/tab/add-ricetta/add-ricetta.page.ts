import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-ricetta',
  templateUrl: './add-ricetta.page.html',
  styleUrls: ['./add-ricetta.page.scss'],
})
export class AddRicettaPage implements OnInit {
  typeOfRicettaArray: string[] = ["Antipasto", "Primo", "Secondo", "Contorno", "Dolce"];
  typeOfRicetta: string;
  steps:any[];
  step: string;
  numOfStep: number;
  
  constructor(private routes:Router) {
     this.typeOfRicetta = "Antipasto";
     this.steps = [];
     this.numOfStep = 0;
  }

  ngOnInit() {
  }

  setTypeOfRicetta(item){
    this.typeOfRicetta = item.detail.value;
    console.log(this.typeOfRicetta);
  }

  inizializzaSteps(){
    this.steps = [
      {
        "numOfStep": 1,
        "descrizione": "Far bollire l'acqua"
      },
      {
        "numOfStep": 2,
        "descrizione": "Buttare la pasta"
      },
      {
        "numOfStep": 3,
        "descrizione": "Scolare la pasta"
      },
      {
        "numOfStep": 4,
        "descrizione": "Servire il piatto"
      }
    ];
  }

  sddStep(){
    this.numOfStep++;
    this.steps.push({"numOfStep": this.numOfStep, "descrizione": this.step});
    this.step = "";
  }
  
}
