import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalityPage } from './modality.page';

const routes: Routes = [
  {
    path: '',
    component: ModalityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalityPageRoutingModule {}
