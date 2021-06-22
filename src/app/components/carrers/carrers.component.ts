import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss'],
})
export class CarrersComponent implements OnInit {

  public Carrers = [
    { title: 'Ingenieria en sistemas', id: 'System',  img:"https://svgsilh.com/svg/2237420.svg" },
    { title: 'Ingenieria en Computacion', id: 'Computer', img: "https://svgsilh.com/svg/152668.svg" },
    {title: 'Ingenieria en Telematica', id: 'Telecom', img: "https://svgsilh.com/svg/159833.svg"},
    
  ];

  constructor() { }

  ngOnInit() {}

}
