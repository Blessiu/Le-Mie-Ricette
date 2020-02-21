import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
@Component({
  selector: 'app-add-ricetta',
  templateUrl: './add-ricetta.page.html',
  styleUrls: ['./add-ricetta.page.scss'],
})
export class AddRicettaPage implements OnInit {
  private step : number = 0;
  public items: string[] = [];
  
  
  constructor(private routes:Router) {
     
  }
  
  addIngredient(ingredient:string){
    this.items.push(ingredient);

    for(var i = 0; i<this.items.length;i++){
     
      var button = document.createElement("button");
      button.innerHTML=ingredient;
      var anchor = document.getElementById("lista");
      anchor.appendChild(button);
    }
}


  deleteElement(item:string){
    this.items.splice(this.items.indexOf(item), 1 );
  }

  goToAddFrigoItem(){
    this.routes.navigateByUrl('add-frigo-item');
  }

  addSteps(){
    this.step=this.step+1;
    var text = document.createElement("ion-input");
    text.setAttribute("type","text");
    text.setAttribute("placeholder","Step numero " + this.step);
    text.setAttribute("class","step");
    var anchor = document.getElementById("lista");
    anchor.appendChild(text);
  }
  

  ngOnInit() {
  }
  
}
