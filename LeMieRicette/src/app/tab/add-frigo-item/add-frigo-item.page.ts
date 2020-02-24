import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AddRicettaPage} from '../add-ricetta/add-ricetta.page';
import { FrigoriferoPage } from '../frigorifero/frigorifero.page'; 
declare var window;
@Component({
  selector: 'app-add-frigo-item',
  templateUrl: './add-frigo-item.page.html',
  styleUrls: ['./add-frigo-item.page.scss'],
})
export class AddFrigoItemPage implements OnInit {
  jsonData:any=[];
  public numOfIngredient:number;
  constructor(private routes: Router) {
    this.inizializzaJSONData();
    this.loadNumOfIngredientSelected();

    /** 
     * Questa è la sezione in cui ho tutti i nomi degli ingredienti, e da cui accedo 
     * anche dalla pagina "add-ricetta". Se si va nella pagina "add-ricetta.page.ts"
     * si dichiara una variabile "window.aggiungiricetta" inizializzata al contesto della classe (this).
     * Se si accede la prima volta all'app e si va nella pagina "Frigorifero" e si prova ad inserire un'ingrediente
     * non funziona, perchè all'inizio non trova cos'e "window.aggiungiricetta", in quanto questa viene inizializzata
     * nel costruttore di add-ricetta.page.ts. Quindi viene inizializzata solo quando si accede alla schermata di aggiungi ricetta.
     * Se provo ad inizializzare anche window.frigorifero mi reinderizza sempre alla schermata "frigorifero" senza inserire
     * gli ingredienti. Se invece si aggiunge prima un ingrediente dalla schermata "aggiungi ricetta" tutto funziona.
     * 
    */
   
   // window.aggiungiricetta = new AddRicettaPage(this.routes);

   //window.frigorifero = new FrigoriferoPage(this.routes);
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
        "isChecked": false
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

       console.log(window.aggiungiricetta.get_origin());

       /**
        * Vengo dalla schermata add-ricetta? allora
        * aggiungo gli ingredienti dentro l'array definito in add-ricetta.page.ts.
        */

      if (window.aggiungiricetta.get_origin()){ 
      
       window.aggiungiricetta.addIngredient(item.name);
        }
      else{
        window.frigorifero.addIngredient(item.name);
        
      }
    }
    }

      /**
        * Vengo dalla schermata add-ricetta? 
        * Allora rivado nella schermata di aggiungi-ricetta, altrimenti 
        * vado in "frigorifero".
        */

    if(window.aggiungiricetta.get_origin()){
      
      this.routes.navigateByUrl('add-ricetta');
      }
      else{
        this.routes.navigateByUrl('frigorifero');
      }
      /**
       * Alla fine delle operazioni inizializzo di nuovo origin a false.
       */
    window.aggiungiricetta.set_origin(false);
  }
}
