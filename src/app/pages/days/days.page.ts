import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalNewComponent } from 'src/app/components/modal-new/modal-new.component';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.page.html',
  styleUrls: ['./days.page.scss'],
})
export class DaysPage implements OnInit {

  identity: string;


  public days = [] ;

  public sdiurno=[

    {title:'Lunes', id: 'slunes'},
    {title:'Jueves', id: 'sjueves'}
  ];

  public cdiurno=[

    {title:'Lunes', id: 'clunes'},
    {title:'Jueves', id: 'cjueves'}
  ];

  public tdiurno=[

    {title:'Lunes', id: 'tlunes'},
    {title:'Jueves', id: 'tjueves'}
  ];

  public cdominical=[

    {title:'Domingo', id:'cdomingo'}
  ];

  public tdominical=[

    {title:'Domingo', id:'tdomingo'}
  ];

  constructor(
    private localStorageService: LocalStorageService,
    private active:ActivatedRoute,
    private modalController: ModalController,
    ) {
      this.active.params.subscribe(param=>this.getModality(param.id))
    }

 
  async ngOnInit() {
    // SACAR DATOS USUARIO IDENTIFICADO
    this.identity =   await  this.localStorageService.getIdentity('identity');
  }

  getModality(id: string) {
                    
    console.log(id);

    switch(id)
    {
      
      case 'sdiurno' :

      this.days= this.sdiurno; // se le asigna el valor de computer a modality
      console.log(this.sdiurno);
      break;

      case 'cdiurno' :

      this.days= this.cdiurno; // se le asigna el valor de computer a modality
      console.log(this.cdiurno);
      break;

      case 'tdiurno' :

      this.days= this.tdiurno; // se le asigna el valor de computer a modality
      console.log(this.tdiurno);
      break;

      case 'cdominical':
        this.days= this.cdominical;
        console.log(this.cdominical);
      break;

      case 'tdominical':
      
      this.days= this.tdominical;
      console.log(this.tdominical);
      break;
    
    }

  }
  async openModalNew(item?)
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
