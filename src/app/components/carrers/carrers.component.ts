import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/localStorage.service';
import { ModalController } from '@ionic/angular';
import { ModalNewComponent } from '../modal-new/modal-new.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss'],
})
export class CarrersComponent implements OnInit {

  identity: string;

  public carrers = [
    { title: 'Ingenieria en sistemas', id: 'system',  img:"https://svgsilh.com/svg/2237420.svg" },
    { title: 'Ingenieria en Computacion', id: 'computer', img: "https://svgsilh.com/svg/152668.svg" },
    {title: 'Ingenieria en Telematica', id: 'telecom', img: "https://svgsilh.com/svg/159833.svg"},
    
  ];

  constructor(
    private localStorageService: LocalStorageService,
    private modalController: ModalController,
    public alertCtrl: AlertController,
  ) { }


  async ngOnInit() {
    // SACAR DATOS USUARIO IDENTIFICADO
    this.identity =   await  this.localStorageService.getIdentity('identity');
  }

  async openModalNew(item)
  {
    var title;
    console.log(item)
    if(!item){ title = 'Nuevo registro'; }
    else { title = 'Editar registro';}
    const modal = await this.modalController.create({
      component: ModalNewComponent,
      cssClass: 'modal-new',
      mode:'ios',
      componentProps: {
        title
      }
    });
    await modal.present();

  }
  async openDelete(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Eliminar carrera',
      message: '¿Está seguro que desea eliminar esta carrera?',
      buttons: [
        {
          text: 'Eliminar'
        }
      ]
    });

    await alert.present();

  }


}
