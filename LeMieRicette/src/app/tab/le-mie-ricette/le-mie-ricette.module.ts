import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeMieRicettePageRoutingModule } from './le-mie-ricette-routing.module';

import { LeMieRicettePage } from './le-mie-ricette.page';
import { ComponentsModule } from '../../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LeMieRicettePageRoutingModule
  ],
  declarations: [LeMieRicettePage]
})
export class LeMieRicettePageModule {}
