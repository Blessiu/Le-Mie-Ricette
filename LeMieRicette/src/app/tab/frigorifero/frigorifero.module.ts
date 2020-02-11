import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrigoriferoPageRoutingModule } from './frigorifero-routing.module';

import { FrigoriferoPage } from './frigorifero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrigoriferoPageRoutingModule
  ],
  declarations: [FrigoriferoPage]
})
export class FrigoriferoPageModule {}
