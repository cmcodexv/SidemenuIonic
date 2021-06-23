import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss'],
})
export class CarrersComponent implements OnInit {

  public carrers = [
    { title: 'Ingenieria en sistemas', id: 'system',  img:"https://svgsilh.com/svg/2237420.svg" },
    { title: 'Ingenieria en Computacion', id: 'computer', img: "https://svgsilh.com/svg/152668.svg" },
    {title: 'Ingenieria en Telematica', id: 'telecom', img: "https://svgsilh.com/svg/159833.svg"},
    
  ];

  constructor() { }

  ngOnInit() {}

}
