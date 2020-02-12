import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-frigo-item',
  templateUrl: './add-frigo-item.page.html',
  styleUrls: ['./add-frigo-item.page.scss'],
})
export class AddFrigoItemPage implements OnInit {

  jsonData:any=[];
  constructor() {
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

  selectVal(val){
    console.log("Hai selezionato "+val);
  }

  inizializzaJSONData(){
    this.jsonData = [
      {
        "name": "Equador",
        "code": "ec"
      },
      {
        "name": "England",
        "code": "en"
      },
      {
        "name": "Italy",
        "code": "it"
      },
      {
        "name": "France",
        "code": "fr"
      }
    ];
  }
}
