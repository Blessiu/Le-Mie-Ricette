import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeMieRicettePage } from './le-mie-ricette.page';

const routes: Routes = [
  {
    path: '',
    component: LeMieRicettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeMieRicettePageRoutingModule {}
