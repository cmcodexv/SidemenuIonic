import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from '../../components/modal-info/modal-info.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  async openModalNew()
  {
    const modal = await this.modalController.create({
      component: ModalInfoComponent,
      cssClass: 'modal-info',
      mode:'ios'
    });
    await modal.present();

  }

}
