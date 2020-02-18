import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertitorePage } from './convertitore.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertitorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertitorePageRoutingModule {}
