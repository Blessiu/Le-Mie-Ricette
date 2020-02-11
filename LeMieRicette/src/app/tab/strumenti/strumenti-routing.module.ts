import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrumentiPage } from './strumenti.page';

const routes: Routes = [
  {
    path: '',
    component: StrumentiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrumentiPageRoutingModule {}
