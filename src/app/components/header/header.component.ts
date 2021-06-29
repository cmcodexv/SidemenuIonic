import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/localStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  identity: string;

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    // SACAR DATOS USUARIO IDENTIFICADO
    this.identity = this.localStorageService.getItem('identity');
    console.log(this.identity)
  }

}
