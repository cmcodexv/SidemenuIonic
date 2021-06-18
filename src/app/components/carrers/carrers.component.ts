import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss'],
})
export class CarrersComponent implements OnInit {

  public Carrers = [
    { title: 'Ingenieria en sistemas', id: 'System',  img:"https://cdn.svgporn.com/logos/hotjar.svg" },
    { title: 'Ingenieria en Computacion', id: 'Computer', img: "https://cdn.svgporn.com/logos/hotjar.svg" },
    {title: 'Ingenieria Telematica', id: 'Telecom', img: "https://cdn.svgporn.com/logos/hotjar.svg"},
    
  ];

  constructor() { }

  ngOnInit() {}

}
