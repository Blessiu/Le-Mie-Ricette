import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrumentiPageRoutingModule } from './strumenti-routing.module';

import { StrumentiPage } from './strumenti.page';
import { ComponentsModule } from '../../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    StrumentiPageRoutingModule
  ],
  declarations: [StrumentiPage]
})
export class StrumentiPageModule {}
