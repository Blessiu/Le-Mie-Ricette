import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frigorifero',
  templateUrl: './frigorifero.page.html',
  styleUrls: ['./frigorifero.page.scss'],
})
export class FrigoriferoPage implements OnInit {
  public items: string[] = [];
  constructor(private routes: Router) {
    for (let i = 0; i < 15; i++) {
      this.items.push('Item ' + i);
    }
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
