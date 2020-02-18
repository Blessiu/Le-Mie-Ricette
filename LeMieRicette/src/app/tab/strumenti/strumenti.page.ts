import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strumenti',
  templateUrl: './strumenti.page.html',
  styleUrls: ['./strumenti.page.scss'],
})
export class StrumentiPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCalcolatrice(){
    this.router.navigateByUrl('calcolatrice');
  }
  goToTimer(){
    this.router.navigateByUrl('timer');
  }
  goToConvertitore(){
    this.router.navigateByUrl('convertitore');
  }

}
