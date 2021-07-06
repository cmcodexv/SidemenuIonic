import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrersPage } from './carrers.page';

const routes: Routes = [
  {
    path: '',
    component: CarrersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrersPageRoutingModule {}
