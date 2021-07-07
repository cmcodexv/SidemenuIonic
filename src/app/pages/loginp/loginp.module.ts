import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginpPageRoutingModule } from './loginp-routing.module';

import { LoginpPage } from './loginp.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginpPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoginpPage]
})
export class LoginpPageModule {}
