import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})

export class TimerPage implements OnInit {

  mydate:any;
  tempo:number;
  mm:number;
  constructor() {
    this.mydate = 0;
    this.tempo = 0;
  }
  
  

  ngOnInit() {
  }

  doSomething(item) {
    let d = new Date(item.detail.value);
    this.mm = d.getMinutes();
    console.log(typeof this.mm);
    this.tempo = this.mm;
    this.startTimer();
  }
  startTimer(){
    this.tempo--;
    console.log('start');
    setTimeout(this.startTimer, 1000);
  }

  
}
