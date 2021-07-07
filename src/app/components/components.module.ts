import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ModalNewComponent } from './modal-new/modal-new.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalNewComponent,
    ModalInfoComponent
  ],
  exports: [
    HeaderComponent,
    ModalNewComponent,
    ModalInfoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
