import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
@Component({
  selector: 'app-add-ricetta',
  templateUrl: './add-ricetta.page.html',
  styleUrls: ['./add-ricetta.page.scss'],
})
export class AddRicettaPage implements OnInit {
  typeOfRicettaArray: string[] = ["Antipasto", "Primo", "Secondo", "Contorno", "Dolce"];
  typeOfRicetta: string;
  steps:any[];
  
  constructor(private routes:Router) {
     this.typeOfRicetta = "Antipasto";
     this.inizializzaSteps();
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
        "numOfStep": "Step 1",
        "descrizione": "Far bollire l'acqua"
      },
      {
        "numOfStep": "Step 2",
        "descrizione": "Buttare la pasta"
      },
      {
        "numOfStep": "Step 3",
        "descrizione": "Scolare la pasta"
      },
      {
        "numOfStep": "Step 4",
        "descrizione": "Servire il piatto"
      }
    ];
  }
  
}
