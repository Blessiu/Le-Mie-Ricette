import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcolatricePage } from './calcolatrice.page';

const routes: Routes = [
  {
    path: '',
    component: CalcolatricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcolatricePageRoutingModule {}
