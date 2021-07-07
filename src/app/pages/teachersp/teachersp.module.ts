import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherspPageRoutingModule } from './teachersp-routing.module';

import { TeacherspPage } from './teachersp.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherspPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TeacherspPage]
})
export class TeacherspPageModule {}
