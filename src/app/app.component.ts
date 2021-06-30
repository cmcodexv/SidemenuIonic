import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{



  public appPages = [
      { title: 'Inicio', url: '/home', icon: 'home' },
      { title: 'Carreras', url: '/carrers', icon: 'reader' },
      // {title: 'Administracion', url: '/administracion', icon: 'person'},
      { title: 'Información', url: '/information', icon: 'information-circle' }
  ];

  constructor() {}

 ngOnInit(){
      

  }

}
