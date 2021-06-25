import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
})
export class DaysComponent implements OnInit {

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

  public ssabatino=[

    {title: 'Sabado', id:'ssabado'},
    
  ];

  public cdominical=[

    {title:'Dominical', id:'cdomingo'}
  ];

  public tdominical=[

    {title:'Dominical', id:'tdomingo'}
  ];

  constructor(private active:ActivatedRoute) {this.active.params.subscribe(param=>this.getModality(param.id))}

  ngOnInit() {}

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

      case 'ssabatino':

      this.days= this.ssabatino;
      console.log('Hola');
      
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

}
