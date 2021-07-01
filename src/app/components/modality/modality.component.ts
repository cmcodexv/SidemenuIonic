import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; 
//nos deja consumir la ruta activa o en la ruta que estamos
//hacer puente de la ruta al componente normal
import {LocalStorageService} from '../../services/localStorage.service';
import { ModalController } from '@ionic/angular';
import { ModalNewComponent } from '../modal-new/modal-new.component';
@Component({
  selector: 'app-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.scss'],
})
export class ModalityComponent implements OnInit {
  identity: string;

  public modality = [] ;

  public system =[

    { title: 'Diurno', id: 'sdiurno' },
    
   
  ];

  public computer =[

    { title: 'Diurno', id: 'cdiurno' },
    
    { title: 'Dominical', id: 'cdominical' }


  ];

  public telecom =[

    {title:'Diurno', id: 'tdiurno'},

    { title: 'Dominical', id: 'tdominical' }
    
    //{ title: 'Dominical', id: 'dominical' }


  ];
  constructor(
    private active:ActivatedRoute, 
    private localStorageService: LocalStorageService,
    private modalController: ModalController,
    ) {
      this.active.params.subscribe(param=>this.getCarrers(param.id))
     }
  //Nos suscribimos a params. Cada parametro me lo vas a mandar como argumento a este  metodo(get carrer)
 
  async ngOnInit() {
    // SACAR DATOS USUARIO IDENTIFICADO
    this.identity =   await  this.localStorageService.getIdentity('identity');
  }

  getCarrers(id: string) {
                    
    console.log(id);

    switch(id)
    {
      
      case 'computer' :

      this.modality= this.computer; // se le asigna el valor de computer a modality

      break;

      case 'system':

      this.modality= this.system;

      
      break;

      case 'telecom':
        this.modality= this.telecom;
        
      break;

    }

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

}
