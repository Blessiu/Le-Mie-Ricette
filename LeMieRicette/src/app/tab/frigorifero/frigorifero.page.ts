import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frigorifero',
  templateUrl: './frigorifero.page.html',
  styleUrls: ['./frigorifero.page.scss'],
})
export class FrigoriferoPage implements OnInit {
  private selectedItem: any;
  public items: string[] = [];
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.items.push('Item ' + i);
    }
  }

  deleteElement(item:string){
this.items.splice(this.items.indexOf(item), 1 );
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
