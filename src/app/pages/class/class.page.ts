import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

  identity: string;
  //array clases
   public clases=[
 
 
   ];
 
   //array sistemas
   public primerldsistemas=[
 
      {title:'Contabilidad 1', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
      {title:'Filosofía',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am',aula:'Aula de Clases: 5602'},
      {title:'Matemática General',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Aula de Clases: 5602'}
 
   ];
 
   public primerjdsistemas=[
 
     {title:'Geografía e historia',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Aula de Clases: 5602'},
     {title:'Informatica basica',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am',aula:'Aula de Clases: 5602'}
     
 
  ];
 
  public segundoldsistemas=[
 
   {title:'Contabilidad 2', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Tecnicas de investigacion documental',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'},
   {title:'Calculo 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'}
 
  ];
 
  public segundojdsistemas=[
 
   {title:'Calculo 2',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Soporte de equipos computacionales',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'}
 
 
  ];
 
 
  public tercerldsistemas=[
 
   {title:'Calculo 2',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Fundamentos de programación',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'}
 
 
 
  ];
 
  public tercerjdsistemas=[
 
   {title:'Metodologia de la investigación', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Seminario de formacion integral',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'},
   {title:'Soporte de equipos computacionales 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'}
 
 
  ];
 
  public cuartoldsistemas=[
 
   {title:'Programación algoritmica', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Base de datos',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'},
   {title:'Seguridad informatica',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'}
 
 
 
  ];
 
  public cuartojdsistemas=[
 
   {title:'Programacion en base de datos',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Programacion orientada a objetos',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'}
 
 
 
  ];
 
  public quintoldsistemas=[
 
   {title:'Inteligencia de negocios',subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Investigacion aplicada',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'}
 
 
  ];
 
  public quintojdsistemas=[
 
   {title:'Ingenieria del software', subtitle:'Prof: Lorem ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'},
   {title:'Programación web',subtitle:'Prof: Lorem ipsum ', entrada:'9:45 am', salida:'11:20 am', aula:'Aula de Clases: 5602'},
   {title:'Programación movil',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am', aula:'Aula de Clases: 5602'}
 
 
 
  ];
 
 
 //Arrays computacion
  public segundoldcomputacion=[
 
   {title:'Teoria de la computación', subtitle:'Prof: Edgard Monge', entrada:'8:00 am', salida:'9:40 am',aula:'Aula de Clases: 5802'},
   {title:'Inglés técnico',subtitle:' ', entrada:'9:45 am', salida:'11:20 am',aula:'Aula de Clases: 5802'},
   
 
 ];
 
 public segundojdcomputacion=[
 
  {title:'Seminario de formacion integral',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Aula de Clases: 5802'},
  {title:'Programacion 1',subtitle:' ', entrada:'9:45 am', salida:'11:20 am',aula:'Laboratorio C'},
  {title:'Calculo 1',subtitle:'Prof: Lorem Ipsum ', entrada:'11:25 am ', salida:'1:00 pm',aula:'Aula de Clases: 5802'}
 
 ];
 
 public terceroldcomputacion=[
 
   {title:'Soporte de equipos computacionales',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Laboratorio A'},
   {title:'Sistemas operativos',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Laboratorio B'},
   {title:'Diseño Gráfico',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm',aula:'Laboratorio A'}
 
 ];
 
 public tercerojdcomputacion=[
 
  {title:'Algoritmos y estructuras de datos 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Laboratorio C'},
  {title:'Analisis y diseño de sistemas',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Laboratorio D'}
  
 
 ];
 
 public cuartoldcomputacion=[
 
   {title:'Innovacion y emprendedurismo',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:' 9:40 am',aula:'Aula de clases: 5804'},
   {title:'Practicas de especializacion',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Aula de clases: 5804'},
   
 
 ];
 
 public cuartojdcomputacion=[
 
  {title:'Programacion en base de datos',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Laboratorio D'},
  {title:'Formulacion y gestion de proyectos',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Aula de clases: 5804'},
  {title:'Sistemas digitales',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm',aula:'Aula de clases: 5804'}
  
 
 ];
 
 public quintoldcomputacion=[
 
   {title:'Programacion bajo software libre',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Laboratorio D'},
   {title:'Redes 2',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Laboratorio D'},
   {title:'Investigacion aplicada',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm',aula:'Aula de clases: 5805'}
 
 ];
 
 public quintojdcomputacion=[
 
  {title:'Facultativa de carrera 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:' 9:40 am',aula:'Laboratorio B'},
  {title:'Tecnologia movil',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Laboratorio A'}
  
 
 ];
 
 
 //Computacion dominical
 public segundodocomputacion=[
     
   {title:'Teoria de la computacion',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am',aula:'Aula de clases: 2404'},
   {title:'Seminario de formacion Integral',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am',aula:'Aula de clases: 5805'},
   {title:'Ingles tecnico',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm',aula:'Aula de clases: 5805'},
   {title:'Programacion 1',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm',aula:'Laboratorio D'},
   {title:'Calculo 1',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm',aula:'Aula de clases: 5805'}
 
 
 ];
 
 public tercerodocomputacion=[
     
   {title:'Sistemas operativos',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am',aula:'Laboratorio D'},
   {title:'Algoritmos y estructura de datos 2',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am',aula:'Laboratorio C'},
   {title:'Analisis y diseño de sistemas 1',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm',aula:'Laboratorio C'},
   {title:'Diseño Grafico',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm',aula:'Laboratorio A'},
  {title:'Soporte de equipos computacionales',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm',aula:'Laboratorio B'}
 
 
 ];
 
 public cuartodocomputacion=[
     
   {title:'Programacion en base de datos',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am',aula:'Laboratorio B'},
   {title:'Sistemas digitales',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am',aula:'Laboratorio C'},
   {title:'Innovacion y emprendedurismo',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm',aula:'Aula de clases: 2404'},
   {title:'Formulacion y gestion de proyectos',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm',aula:'Aula de clases: 2404'},
  {title:'Practicas de especializacion',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm',aula:'Aula de clases: 2404'}
 
 
 ];
 
 public quintodocomputacion=[
     
   {title:'Redes 2',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am',aula:'Laboratorio B'},
   {title:'Tecnologia Movil',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am',aula:'Laboratorio C'},
   {title:'Programacion bajo software',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm',aula:'Laboratorio D'},
   {title:'Investigacion aplicada',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm',aula:'Aula de clases: 2405'},
  {title:'Facultativa de carrera 2',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm',aula:'Laboratorio B'}
 
 
 ];
 
 //Telematica
 
 public primerldtelematica=[
 
   {title:'Contabilidad 1',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am', salida:'9:40 am',aula:'Aula de clases: 5608'},
   {title:'Filosofía',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Aula de clases: 5608'},
   {title:'Matematica General',subtitle:'Prof: Lorem Ipsum', entrada:'11:25 am ', salida:'1:00 pm',aula:'Aula de clases: 5608'}
 
 ];
 
 public primerjdtelematica=[
 
  {title:'Geografia e historia',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:' 9:40 am',aula:'Aula de clases: 5608'},
  {title:'Informatica basica',subtitle:'Prof: Lorem Ipsum', entrada:'9:45 am ', salida:'11:20 am',aula:'Laboratorio B'}
  
 
 ];
 
 public primerdotelematica=[
 
   {title:'Geografia e historia',subtitle:'Prof: Lorem Ipsum', entrada:'8:00 am ', salida:'9:20 am',aula:'Aula de clases: 2408'},
   {title:'Informatica basica',subtitle:'Prof: Lorem Ipsum', entrada:'9:25 am ', salida:'10:45 am',aula:'Laboratorio C'},
   {title:'Contabilidad 1',subtitle:'Prof: Lorem Ipsum', entrada:'10:50 am ', salida:' 12:10 pm',aula:'Aula de clases: 3408'},
   {title:'Filosofía',subtitle:'Prof: Lorem Ipsum', entrada:'12:50 pm ', salida:'2:10 pm',aula:'Aula de clases: 2408'},
   {title:'Matematica General',subtitle:'Prof: Lorem Ipsum', entrada:'2:15 pm ', salida:'3:35 pm',aula:'Aula de clases: 2408'}
   
  
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
 
   openModalNew(value: number) {}
}
