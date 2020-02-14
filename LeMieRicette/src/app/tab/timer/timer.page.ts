import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})

export class TimerPage implements OnInit {

  constructor() {}
  mydate:any;
  

  ngOnInit() {
  }

  doSomething(item) {
    console.log(item.detail.value);
 }

  
}
