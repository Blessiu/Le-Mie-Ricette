import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFrigoItemPageRoutingModule } from './add-frigo-item-routing.module';

import { AddFrigoItemPage } from './add-frigo-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFrigoItemPageRoutingModule
  ],
  declarations: [AddFrigoItemPage]
})
export class AddFrigoItemPageModule {}
