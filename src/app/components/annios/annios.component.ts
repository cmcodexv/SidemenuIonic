import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-annios',
  templateUrl: './annios.component.html',
  styleUrls: ['./annios.component.scss'],
})
export class AnniosComponent implements OnInit {

  public annios=[ 

  ];

  public sistemas=[
       
    {title:'1er Año', id:'sprimerAño'},
    {title:'2do Año', id:'ssegundoAño'},
    {title:'3er Año', id:'stercerAño'},
    {title:'4to Año', id:'scuartoAño'},
    {title:'5to Año', id:'squintoAño'},
  

  ];

  public computacion=[
       
    
    {title:'2do Año', id:'csegundoAño'},
    {title:'3er Año', id:'ctercerAño'},
    {title:'4to Año', id:'ccuartoAño'},
    {title:'5to Año', id:'cquintoAño'},
  

  ];

  public telematica=[
       
    {title:'1er Año', id:'tprimerAño'},
    {title:'2do Año', id:'tsegundoAño'},
    {title:'3er Año', id:'ttercerAño'},
    {title:'4to Año', id:'tcuartoAño'},
    {title:'5to Año', id:'tquintoAño'},
  
  ];




  constructor(private active:ActivatedRoute) {this.active.params.subscribe(param=>this.getDays(param.id)) }

  ngOnInit() {}

  getDays(id: string){

    console.log('Hola');
    switch(id)
    {
      
      case 'slunes':

      this.annios=this.sistemas;
      break;

      case 'sjueves':

      this.annios=this.sistemas;
      break;

      case 'tlunes':

      this.annios=this.telematica;
      break;

      case 'tjueves':

      this.annios=this.telematica;
      break;

      case 'clunes':
      
      this.annios=this.computacion;
      break;

      case 'cjueves':
      
      this.annios=this.computacion;
      break;

      case 'ssabado':
      this.annios=this.sistemas;
      break;

      case 'cdomingo':
      
      this.annios=this.computacion;
      break;

      case 'tdomingo':
      
      this.annios=this.telematica;
      break;

      


    }


  }

}
