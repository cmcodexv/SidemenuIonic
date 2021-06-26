import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {

  public clases=[


  ];

  public primerldsistemas=[

     {title:'Contabilidad 1', id:'cont1'},
     {title:'Tecnicas de lectura y redaccion',id:'tlr'},
     {title:'Matematica General', id:'matg'}

  ];

  public primerjdsistemas=[

    {title:'Geografia e historia', id:'geoehis'},
    {title:'Informatica basica',id:'InfoB'}
    

 ];

 public ldcomputacion=[

  {title:'Fundamentos de  programacion', id:'fdp'},
  {title:'Fudamentos de computacion',id:'fdc'},
  {title:'Tecnicas de lectura y redaccion', id:'tdlr'}

];

public jdcomputacion=[

 {title:'Geografia e historia', id:'geoehisNic'},
 {title:'Estadistica y probabilidades',id:'EyP'}
 

];
  constructor(private active:ActivatedRoute) {this.active.params.subscribe(param=>this.getAnnios(param.id)) }

  ngOnInit() {}


  getAnnios(id: string){

            switch(id)
            {
              //sistemas
              case 'lsprimerAño':

              this.clases= this.primerldsistemas;
              console.log(this.primerldsistemas[1].title);

              break;

              case 'jsprimerAño':
              this.clases=this.primerjdsistemas;
              break;

              case 'lssegundoAño':
                //this.clases= this.segundoldssistemas;

              break;

              case 'jssegundoAño':
                //this.clases= this.segundoldssistemas;

              break;


              case 'lscuartoAño':

              break;

              case 'lsquintoAño':

              break;


            
             //computacion diurno
              case 'dcsegundoAño':

              break;

              case 'dcterceerAño':

              break;


              case 'dccuartoAño':

              break;

              case 'dcquintoAño':

              break;

              //Computacion Dominical
              case 'docsegundoAño':

              break;

              case 'docterceerAño':

              break;


              case 'doccuartoAño':

              break;

              case 'docquintoAño':

              break;
            
              //Telematica Diurno
              case 'dtprimerAño':

              break;

              case 'dtsegundoAño':

              break;

              case 'dtterceerAño':

              break;


              case 'dtcuartoAño':

              break;

              case 'dtquintoAño':

              break;

             //Telematica Dominicañl
             case 'dotprimerAño':

              break;

              case 'dotsegundoAño':

              break;

              case 'dotterceerAño':

              break;


              case 'dotcuartoAño':

              break;

              case 'dotquintoAño':

              break;





            }

  }

}
