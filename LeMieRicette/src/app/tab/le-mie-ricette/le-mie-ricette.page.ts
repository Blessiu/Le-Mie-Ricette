import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-le-mie-ricette',
  templateUrl: './le-mie-ricette.page.html',
  styleUrls: ['./le-mie-ricette.page.scss'],
})
export class LeMieRicettePage implements OnInit {

  constructor(private routes: Router) { }

  goToSearch(){
    this.routes.navigateByUrl('search');
  }

  ngOnInit() {
  }

}
