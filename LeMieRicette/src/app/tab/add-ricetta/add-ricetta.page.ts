import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
declare var window;
@Component({
  selector: 'app-add-ricetta',
  templateUrl: './add-ricetta.page.html',
  styleUrls: ['./add-ricetta.page.scss'],
})
export class AddRicettaPage implements OnInit {

 /**
  * Inizializzo una variabile booleana "origin", per tenere traccia di dove vengo.
  */
  private origin : boolean=false;


  public ingredienti: string[] = [];
  typeOfRicetta: string;
  steps:any[];
  step: string;
  numOfStep: number;
  
  constructor(private routes:Router) {
     this.typeOfRicetta = "Antipasto";
     this.steps = [];
     this.numOfStep = 0;

     window.aggiungiricetta=this; // <----

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

  listIngredienti(){
    this.origin = true;
    console.log("Origin vale: " +this.origin);
    this.routes.navigateByUrl('add-frigo-item');
  }
  
  addIngredient(ingredient:string){
       this.ingredienti.push(ingredient);
  }

  deleteElement(item:string){
    this.ingredienti.splice(this.ingredienti.indexOf(item), 1 );
  }



  /**
   * get_origin, se true allora vengo re-inderizzato su questa pagina.
   */
  public get_origin() {
    console.log("Sono nel get, origin vale" + this.origin);
    return this.origin;
  }

  /**
   * 
   * @param origin 
   * Una volta che ho inserito gli ingredienti dalla schermata "aggiungi-ingrediente"
   * inizializzo di nuovo origin a false.
   */
  public set_origin(origin:boolean){
    this.origin=origin;

  }
}
