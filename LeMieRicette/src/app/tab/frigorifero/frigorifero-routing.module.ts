import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrigoriferoPage } from './frigorifero.page';

const routes: Routes = [
  {
    path: '',
    component: FrigoriferoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrigoriferoPageRoutingModule {}
