import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-add-frigo-item',
  templateUrl: './add-frigo-item.page.html',
  styleUrls: ['./add-frigo-item.page.scss'],
})
export class AddFrigoItemPage implements OnInit {

  jsonData:any=[];
  numOfIngredient:number;
  constructor(private routes: Router) {
    this.inizializzaJSONData();
   }

  ngOnInit() {
  }

  filterJSONData(ev:any){
    this.inizializzaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != ''){
      this.jsonData = this.jsonData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      });
    }
  }

  inizializzaJSONData(){
    this.jsonData = [
      {
        "name": "Acciughe",
        "isChecked": false
      },
      {
        "name": "Latte",
        "isChecked": false
      },
      {
        "name": "Cipolle",
        "isChecked": false
      },
      {
        "name": "Pomodoro",
        "isChecked": false
      },
      {
        "name": "Spaghetti",
        "isChecked": false
      },
      {
        "name": "Orecchiette",
        "isChecked": false
      },
      {
        "name": "Burro",
        "isChecked": false
      },
      {
        "name": "Vino rosso",
        "isChecked": false
      },
      {
        "name": "Aceto",
        "isChecked": false
      },
      {
        "name": "Lattuga",
        "isChecked": false
      },
      {
        "name": "Cicoria",
        "isChecked": false
      },
      {
        "name": "Patate",
        "isChecked": false
      },
      {
        "name": "Passata di pomodoro",
        "isChecked": false
      },
      {
        "name": "Pancetta",
        "isChecked": true
      },
      {
        "name": "Guanciale",
        "isChecked": false
      },
      {
        "name": "Salsiccia",
        "isChecked": false
      }
    ];
  }

  loadNumOfIngredientSelected(){
    let i = 0;
    for(let item of this.jsonData){
      if(item.isChecked){
        console.log(item.name);
        i++;
      }
    }
    this.numOfIngredient = i;
  }

  showCheckedValue(){
    console.log("Ingredienti selezionati:");
    let i = 1;
    for(let item of this.jsonData){
      if(item.isChecked){
        console.log(i + ") " + item.name);
        i++;
      }
    }
    this.routes.navigateByUrl('frigorifero');
  }
}