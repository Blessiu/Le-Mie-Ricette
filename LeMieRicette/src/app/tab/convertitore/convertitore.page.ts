import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertitore',
  templateUrl: './convertitore.page.html',
  styleUrls: ['./convertitore.page.scss'],
})
export class ConvertitorePage implements OnInit {

  jsonData:any=[];
  selectedItem:string;
  valueItem:number;
  valute:string[]=["Kg", "gr", "Litri", "ml"];
  valutaDa:string;
  valutaA:string;
  valoreDa:number;
  valoreA:number;
  result:any;

  constructor() {
    this.inizializzaJSONData();
    this.valutaDa = "Kg";
    this.valutaA = "Litri";
    this.valueItem = 1;
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

  doSomething(item) {
    this.selectedItem = item.detail.value;
    for(let item of this.jsonData){
      if(item.name == this.selectedItem){
        this.valueItem = item.valore;
      }
    }
    if(this.valoreA != null){
      this.converter();
    }
  }

  doSetValutaDa(item){
    this.valutaDa = item.detail.value;
    if(this.valoreA != null){
      this.converter();
    }
  }

  doSetValutaA(item){
    this.valutaA = item.detail.value;
    if(this.valoreA != null){
      this.converter();
    }
  }

  setValore(item){
    this.valoreDa = +item.detail.value;
    this.converter();
  }

  converter(){
    //this.valoreA = this.valoreDa / this.valueItem;
    if(this.valutaDa == "Kg"){
      switch(this.valutaA) {
        case "Kg":
          this.valoreA = this.valoreDa;
          break;
        case "gr":
          this.valoreA = this.valoreDa * 1000;
          break;
        case "Litri":
          this.valoreA = this.valoreDa / this.valueItem;
          break;
        case "ml":
          this.valoreA = (this.valoreDa / this.valueItem) * 1000;
          break;
      }
    }
    if(this.valutaDa == "gr"){
      switch(this.valutaA) {
        case "Kg":
          this.valoreA = this.valoreDa / 1000;
          break;
        case "gr":
          this.valoreA = this.valoreDa;
          break;
        case "Litri":
          this.valoreA = (this.valoreDa / this.valueItem) / 1000;
          break;
        case "ml":
          this.valoreA = this.valoreDa / this.valueItem;
          break;
      }
    }
    if(this.valutaDa == "Litri"){
      switch(this.valutaA) {
        case "Kg":
          this.valoreA = this.valoreDa * this.valueItem;
          break;
        case "gr":
          this.valoreA = (this.valoreDa * this.valueItem) * 1000;
          break;
        case "Litri":
          this.valoreA = this.valoreDa;
          break;
        case "ml":
          this.valoreA = this.valoreDa * 1000;
          break;
      }
    }
    if(this.valutaDa == "ml"){
      switch(this.valutaA) {
        case "Kg":
          this.valoreA = (this.valoreDa * this.valueItem) / 1000;
          break;
        case "gr":
          this.valoreA = this.valoreDa * this.valueItem;
          break;
        case "Litri":
          this.valoreA = this.valoreDa / 1000;
          break;
        case "ml":
          this.valoreA = this.valoreDa;
          break;
      }
    }
    this.result = this.valoreA.toFixed(2);
  }

}
