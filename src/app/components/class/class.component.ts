import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../services/localStorage.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit {
  identity: string;
 //array clases
  public clases=[


  ];

  //array sistemas
  public primerldsistemas=[

     {title:'Contabilidad 1', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
     {title:'Tecnicas de lectura y redaccion',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'},
     {title:'Matematica General',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'}

  ];

  public primerjdsistemas=[

    {title:'Geografia e historia',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
    {title:'Informatica basica',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'}
    

 ];

 public segundoldsistemas=[

  {title:'Contabilidad 2', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Tecnicas de investigacion documental',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'},
  {title:'Calculo 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'}

 ];

 public segundojdsistemas=[

  {title:'Calculo 2',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Soporte de equipos computacionales',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'}


 ];


 public tercerldsistemas=[

  {title:'Calculo 2',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Fundamentos de programación',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'}



 ];

 public tercerjdsistemas=[

  {title:'Metodologia de la investigación', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Seminario de formacion integral',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'},
  {title:'Soporte de equipos computacionales 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'}


 ];

 public cuartoldsistemas=[

  {title:'Programación algoritmica', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Base de datos',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'},
  {title:'Seguridad informatica',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'}



 ];

 public cuartojdsistemas=[

  {title:'Programacion en base de datos',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Programacion orientada a objetos',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'}



 ];

 public quintoldsistemas=[

  {title:'Inteligencia de negocios',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Investigacion aplicada',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'}


 ];

 public quintojdsistemas=[

  {title:'Ingenieria del software', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Programación web',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am'},
  {title:'Programación movil',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'}



 ];


//Arrays computacion
 public segundoldcomputacion=[

  {title:'Teoria de la computación', subtitle:'Prof: Edgard Monge', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Inglés técnico',subtitle:' ', entrada:'9:45 am', salida:'11:20 am'},
  

];

public segundojdcomputacion=[

 {title:'Seminario de formacion integral',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'},
 {title:'Programacion 1',subtitle:' ', entrada:'9:45 am', salida:'11:20 am'},
 {title:'Calculo 1',subtitle:'Prof: Lorem Ipsum ', entrada:'11:25 am ', salida:'1:00 pm'}

];

public terceroldcomputacion=[

  {title:'Soporte de equipos computacionales',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Sistemas operativos',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'},
  {title:'Diseño Gráfico',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm'}

];

public tercerojdcomputacion=[

 {title:'Algoritmos y estructuras de datos 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'},
 {title:'Analisis y diseño de sistemas',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'}
 

];

public cuartoldcomputacion=[

  {title:'Innovacion y emprendedurismo',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:' 9:40 am'},
  {title:'Practicas de especializacion',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'},
  

];

public cuartojdcomputacion=[

 {title:'Programacion en base de datos',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'},
 {title:'Formulacion y gestion de proyectos',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'},
 {title:'Sistemas digitales',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm'}
 

];

public quintoldcomputacion=[

  {title:'Programacion bajo software libre',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Redes 2',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'},
  {title:'Investigacion aplicada',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm'}

];

public quintojdcomputacion=[

 {title:'Facultativa de carrera 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:' 9:40 am'},
 {title:'Tecnologia movil',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'}
 

];


//Computacion dominical
public segundodocomputacion=[
    
  {title:'Teoria de la computacion',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am'},
  {title:'Seminario de formacion Integral',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am'},
  {title:'Ingles tecnico',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm'},
  {title:'Programacion 1',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm'},
 {title:'Calculo 1',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm'}


];

public tercerodocomputacion=[
    
  {title:'Sistemas operativos',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am'},
  {title:'Algoritmos y estructura de datos 2',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am'},
  {title:'Analisis y diseño de sistemas 1',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm'},
  {title:'Diseño Grafico',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm'},
 {title:'Soporte de equipos computacionales',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm'}


];

public cuartodocomputacion=[
    
  {title:'Programacion en base de datos',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am'},
  {title:'Sistemas digitales',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am'},
  {title:'Innovacion y emprendedurismo',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm'},
  {title:'Formulacion y gestion de proyectos',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm'},
 {title:'Practicas de especializacion',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm'}


];

public quintodocomputacion=[
    
  {title:'Redes 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am'},
  {title:'Tecnologia Movil',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am'},
  {title:'Programacion bajo software',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm'},
  {title:'Investigacion aplicada',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm'},
 {title:'Facultativa de carrera 2',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm'}


];

//Telematica

public primerldtelematica=[

  {title:'Contabilidad 1',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am'},
  {title:'Tecnicas de lectura y redaccion',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'},
  {title:'Matematica General',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm'}

];

public primerjdtelematica=[

 {title:'Geografia e historia',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:' 9:40 am'},
 {title:'Informatica basica',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am'}
 

];

public primerdotelematica=[

  {title:'Geografia e historia',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am'},
  {title:'Informatica basica',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am'},
  {title:'Contabilidad 1',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm'},
  {title:'Tecnicas de lectura y redaccion',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm'},
  {title:'Matematica General',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm'}
  
 
 ];



  constructor(
    private active:ActivatedRoute,
    private localStorageService: LocalStorageService,
    ) {
      this.active.params.subscribe(param=>this.getAnnios(param.id)) 
    }

  
    async ngOnInit() {
      // SACAR DATOS USUARIO IDENTIFICADO
      this.identity =   await  this.localStorageService.getIdentity('identity');
    }


  getAnnios(id: string){

            switch(id)
            {
              //sistemas
              case 'lsprimerAño':

              this.clases= this.primerldsistemas;

              break;

              case 'jsprimerAño':
              this.clases=this.primerjdsistemas;
              break;

              case 'lssegundoAño':
                this.clases= this.segundoldsistemas;

              break;

              case 'jssegundoAño':
                this.clases= this.segundojdsistemas;

              break;


              case 'lstercerAño':
                this.clases= this.tercerldsistemas;

              break;

              case 'jstercerAño':

                this.clases= this.tercerjdsistemas;

              break;


              case 'lscuartoAño':
                this.clases= this.cuartoldsistemas;
                break;
  
              case 'jscuartoAño':
                this.clases= this.cuartojdsistemas;
                break;

            
               case 'lsquintoAño':
                this.clases= this.quintoldsistemas;
               break;
    
               case 'jsquintoAño':
                this.clases= this.quintojdsistemas;
               break;


            
             //computacion diurno
              case 'dlcsegundoAño':
              this.clases= this.segundoldcomputacion;
              break;

              case 'djcsegundoAño':
                this.clases= this.segundojdcomputacion;
              break;

              case 'dlctercerAño':
                this.clases= this.terceroldcomputacion;
              break;

              case 'djctercerAño':
                this.clases= this.tercerojdcomputacion;
              break;

              case 'dlccuartoAño':
                this.clases= this.cuartoldcomputacion;
               break;
  
              case 'djccuartoAño':
                this.clases= this.cuartojdcomputacion;
              break;

              case 'dlcquintoAño':
                this.clases= this.quintoldcomputacion;
              break;
  
              case 'djcquintoAño':
                this.clases= this.quintojdcomputacion;
              break;
              //Computacion Dominical
              case 'docsegundoAño':
              this.clases= this.segundodocomputacion;
              break;

              case 'doctercerAño':
                this.clases= this.tercerodocomputacion;
              break;

              case 'doccuartoAño':
                this.clases= this.cuartodocomputacion;
              break;

              case 'docquintoAño':
                this.clases= this.quintodocomputacion;
              break;
            
              //Telematica Diurno
              case 'dltprimerAño':
              this.clases= this.primerldtelematica;
              break;

              case 'djtprimerAño':
              this.clases= this.primerjdtelematica;
              break;

             //Telematica Dominicañl
             case 'dotprimerAño':
              this.clases=this.primerdotelematica;
              break;



            }

  }

}
