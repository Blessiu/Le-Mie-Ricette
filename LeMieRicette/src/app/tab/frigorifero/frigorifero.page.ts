import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var window;
@Component({
  selector: 'app-frigorifero',
  templateUrl: './frigorifero.page.html',
  styleUrls: ['./frigorifero.page.scss'],
})
export class FrigoriferoPage implements OnInit {
  public items: string[] = [];
  constructor(private routes: Router) {
    window.frigorifero = this;
  }

  addIngredient(ingredient:string){
    this.items.push(ingredient);
  }

  deleteElement(item:string){
    this.items.splice(this.items.indexOf(item), 1 );
  }

  goToAddFrigoItem(){
    this.routes.navigateByUrl('add-frigo-item');
  }

  ngOnInit() {
  }
  
}
