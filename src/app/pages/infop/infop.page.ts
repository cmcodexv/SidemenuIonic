import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from 'src/app/components/modal-info/modal-info.component';

@Component({
  selector: 'app-infop',
  templateUrl: './infop.page.html',
  styleUrls: ['./infop.page.scss'],
})
export class InfopPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openModalNew()
  {
    const modal = await this.modalCtrl.create({
      component: ModalInfoComponent,
      cssClass: 'modal-info',
      mode:'ios'
    });
    await modal.present();

  }
}
