import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalityPageRoutingModule } from './modality-routing.module';

import { ModalityPage } from './modality.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalityPage]
})
export class ModalityPageModule {}
