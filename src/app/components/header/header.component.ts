import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/localStorage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  identity: string;

  constructor(
    private localStorageService: LocalStorageService,
    private navCtrl: NavController,
  ) { }

  async ngOnInit() {
    // SACAR DATOS USUARIO IDENTIFICADO
    this.identity =   await  this.localStorageService.getItem('identity');
  }

  async logout() {
    // Eliminar datos del storage
   await this.localStorageService.removeItem('identity');
   this.navCtrl.navigateRoot('/home');
  }

}
