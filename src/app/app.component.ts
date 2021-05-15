import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'mail' },
    { title: 'Carreras', url: '/carrers', icon: 'paper-plane' },
    { title: 'Información', url: '/information', icon: 'heart' }
  ];

  constructor() {}
}
