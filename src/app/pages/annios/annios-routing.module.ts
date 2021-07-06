import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnniosPage } from './annios.page';

const routes: Routes = [
  {
    path: '',
    component: AnniosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnniosPageRoutingModule {}
