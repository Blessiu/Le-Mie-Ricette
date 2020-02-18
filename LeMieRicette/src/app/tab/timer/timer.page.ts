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
  minuti:number;
  secondi:number;
  constructor() {
    this.mydate = 0;
    this.tempo = 0;
    this.minuti = 0;
    this.secondi = 0;
  }
  
  

  ngOnInit() {
  }

  doSomething(item) {
    let d = new Date(item.detail.value);
    this.mm = d.getMinutes();
    this.tempo = this.mm;
    this.minuti = this.tempo;
    if(this.tempo != 0){
      document.getElementById('start').style.display = '';
    }
  }

  start(){
    this.minuti--;
    this.secondi = 59;
    document.getElementById('stop').style.display = 'none';
    document.getElementById('pausa').style.display = '';
    document.getElementById('start').style.display = 'none';
    this.alarmSound.src = '../../assets/alarm.mp3';
    this.intervalVar = setInterval(
      function(){
       if(this.minuti < 1 && this.secondi < 2){
        this.secondi--;
        this.alarmSound.play();
        document.getElementById('stop').style.display = '';
        document.getElementById('pausa').style.display = 'none';
        clearInterval(this.intervalVar);
       } else{
         if(this.secondi == 0){
           this.minuti--;
           this.secondi = 59;
         }
         this.secondi--;
       }
     }.bind(this),1000);
  }

  pausa() {
    document.getElementById('continue').style.display = '';
    document.getElementById('pausa').style.display = 'none';
    document.getElementById('stop').style.display = '';
    clearInterval(this.intervalVar);
  }

  stop(){
    this.mydate = 0;
    this.minuti = 0;
    this.secondi = 0;
    this.tempo = 0;
    this.alarmSound.pause();
    document.getElementById('stop').style.display = 'none';
    document.getElementById('start').style.display = 'none';
  }

  continue(){
    document.getElementById('stop').style.display = 'none';
    document.getElementById('pausa').style.display = '';
    document.getElementById('continue').style.display = 'none';
    this.intervalVar = setInterval(
      function(){
       if(this.minuti < 1 && this.secondi < 2){
        this.secondi--;
        this.alarmSound.play();
        document.getElementById('stop').style.display = '';
        document.getElementById('pausa').style.display = 'none';
        clearInterval(this.intervalVar);
       } else{
         if(this.secondi == 0){
           this.minuti--;
           this.secondi = 59;
         }
         this.secondi--;
       }
     }.bind(this),1000);
  }
  
}
