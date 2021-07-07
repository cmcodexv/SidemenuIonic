import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopPageRoutingModule } from './infop-routing.module';

import { InfopPage } from './infop.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfopPage]
})
export class InfopPageModule {}
