import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; //nos deja consumir la ruta activa o en la ruta que estamos
                                              //hacer puente de la ruta al componente normal
@Component({
  selector: 'app-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.scss'],
})
export class ModalityComponent implements OnInit {

  public Modality = [
    
           
    
  ] ;

  public System =[

    { title: 'Diurno', id: 'diurno' },
    { title: 'Sabatino', id: 'sabatino' },
   

  ];

  public Computer =[

    { title: 'Diurno', id: 'diurno' },
    
    { title: 'Dominical', id: 'dominical' }


  ];

  public Telecom =[

    { title: 'Sabatino', id: 'diurno' },
    
    //{ title: 'Dominical', id: 'dominical' }


  ];
  constructor(private active:ActivatedRoute) {this.active.params.subscribe(param=>this.getCarrers(param.id)) }
  //Nos suscribimos a params. Cada parametro me lo vas a mandar como argumento a este  metodo(get carrer)
  ngOnInit() {}

  getCarrers(id: string) {
                    
    console.log(id);

    switch(id)
    {
      
      case 'Computer' :

      this.Modality= this.Computer; // se le asigna el valor de computer a modality

      break;

      case 'System':

      this.Modality= this.System;

      console.log(this.Modality);
      break;

      case 'Telecom':
        this.Modality= this.Telecom;
        console.log(this.Modality);
      break;

    }

  }

}
