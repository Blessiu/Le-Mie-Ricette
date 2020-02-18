import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})
export class ConvertitorePage implements OnInit {

  jsonData:any=[];

  constructor() {
    this.inizializzaJSONData();
   }

  ngOnInit() {
  }

  inizializzaJSONData(){
    this.jsonData = [
      {
        "name": "Acqua",
        "valore": 1
      },
      {
        "name": "Albume",
        "valore": 0.93
      },
      {
        "name": "Burro",
        "valore": 0.97
      },
      {
        "name": "Cacao",
        "valore": 0.47
      },
      {
        "name": "Cioccolato",
        "valore": 1.02
      },
      {
        "name": "Farina",
        "valore": 0.76
      },
      {
        "name": "Latte in polvere",
        "valore": 0.49
      },
      {
        "name": "Latte",
        "valore": 1.032
      },
      {
        "name": "Margarina",
        "valore": 0.93
      },
      {
        "name": "Olio vegetale",
        "valore": 0.89
      },
      {
        "name": "Olio d'oliva",
        "valore": 0.81
      },
      {
        "name": "Panna acida",
        "valore": 0.51
      },
      {
        "name": "Zucchero",
        "valore": 0.81
      },
      {
        "name": "Zucchero in polvere",
        "valore": 0.55
      }
    ];
  }

}
