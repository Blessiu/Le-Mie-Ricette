import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrigoriferoPageRoutingModule } from './frigorifero-routing.module';

import { FrigoriferoPage } from './frigorifero.page';
import { ComponentsModule } from '../../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FrigoriferoPageRoutingModule
  ],
  declarations: [FrigoriferoPage]
})
export class FrigoriferoPageModule {}
