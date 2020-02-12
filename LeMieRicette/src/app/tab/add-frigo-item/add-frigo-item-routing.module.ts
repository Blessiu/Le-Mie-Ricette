import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFrigoItemPage } from './add-frigo-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddFrigoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFrigoItemPageRoutingModule {}
