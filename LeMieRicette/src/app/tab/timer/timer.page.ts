import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})

export class TimerPage implements OnInit {

  mydate:any;
  constructor() {
    this.mydate = 0;
  }
  
  

  ngOnInit() {
  }

  doSomething(item) {
    console.log(item.detail.value);
    let d = new Date(item.detail.value);
    let mm = d.getMinutes();
    console.log(mm);
 }

  
}
