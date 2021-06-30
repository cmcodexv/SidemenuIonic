import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from './services/localStorage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  identity: string;
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Carreras', url: '/carrers', icon: 'reader' },
    // {title: 'Administracion', url: '/administracion', icon: 'person'},
    { title: 'Información', url: '/information', icon: 'information-circle' }
  ];

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  async ngOnInit(){
      // SACAR DATOS USUARIO IDENTIFICADO
      this.identity = await this.localStorageService.getItem('identity');
  }
}
