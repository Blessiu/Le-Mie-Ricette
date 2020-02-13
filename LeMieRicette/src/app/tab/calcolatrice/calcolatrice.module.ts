import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcolatricePageRoutingModule } from './calcolatrice-routing.module';

import { CalcolatricePage } from './calcolatrice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcolatricePageRoutingModule
  ],
  declarations: [CalcolatricePage]
})
export class CalcolatricePageModule {}
