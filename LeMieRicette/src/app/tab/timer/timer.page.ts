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
  intervalVar:any;
  alarmSound = new Audio();
  constructor() {
    this.mydate = 0;
    this.tempo = 0;
  }
  
  

  ngOnInit() {
  }

  doSomething(item) {
    let d = new Date(item.detail.value);
    this.mm = d.getMinutes();
    this.tempo = this.mm;
    if(this.tempo != 0){
      document.getElementById('alarmButton').style.display = '';
    }
  }

  start(){
    document.getElementById('alarmStop').style.display = 'none';
    document.getElementById('pausaAlarmBtn').style.display = '';
    document.getElementById('alarmButton').style.display = 'none';
    this.alarmSound.src = '../../assets/alarm.mp3';
    this.intervalVar= setInterval(
      function(){
       if(this.tempo < 2){
        this.tempo--;
        this.alarmSound.play();
        document.getElementById('alarmStop').style.display = '';
        document.getElementById('pausaAlarmBtn').style.display = 'none';
        clearInterval(this.intervalVar);
       } else{
         this.tempo--;
       }
     }.bind(this),1000);
  }

  pausaAlarm() {
    document.getElementById('alarmButton').style.display = '';
    document.getElementById('pausaAlarmBtn').style.display = 'none';
    document.getElementById('alarmStop').style.display = '';
    clearInterval(this.intervalVar);
  }

  stop(){
    this.mydate = 0;
    this.tempo = 0;
    this.alarmSound.pause();
    document.getElementById('alarmStop').style.display = 'none';
    document.getElementById('alarmButton').style.display = 'none';
  }
  
}
