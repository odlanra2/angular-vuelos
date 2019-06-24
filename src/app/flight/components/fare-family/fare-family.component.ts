import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fare-family',
  templateUrl: './fare-family.component.html',
  styleUrls: ['./fare-family.component.scss']
})
export class FareFamilyComponent implements OnInit {


  src: String = '/assets/img/fare-family/Flight/';
  FareSelected: String = 'Light';

   listfares: any = [
  	{
  		title: 'Equipaje de mano',
      subtitle: '1 pieza de 5kg',
      url: '/assets/img/fare-family/Iconos/Selección de asiento.svg',
      light: '/assets/img/fare-family/Iconos/Check light.svg',
      plus: '/assets/img/fare-family/Iconos/Check plus.svg',
      subplus: '',
      top: '/assets/img/fare-family/Iconos/Check top.svg',

    },
  	{
      title: 'Equipaje de bodega',
      subtitle: '1 pieza de 23kg',
      url: '/assets/img/fare-family/Iconos/Equipaje de bodega.svg',
      light: 'Costo extra',
      plus: '1 pieza',
      subplus: '',
      top: '2 piezas',

  	},
  	{
      title: 'Selección de asiento',
      subtitle: '',
      url: '/assets/img/fare-family/Iconos/Selección de asiento.svg',
      light: 'Costo extra',
      plus: '/assets/img/fare-family/Iconos/Check plus.svg',
      subplus: '',
      top: '/assets/img/fare-family/Iconos/Check top.svg',
  	},

    {
  		title: 'Asiento favorito',
      subtitle: '',
      url: '/assets/img/fare-family/Iconos/Asiento favorito.svg',
      light: 'Costo extra',
      plus: 'Costo extra',
      subplus: '',
      top: '/assets/img/fare-family/Iconos/Check top.svg',
    },
    {
  		title: 'Cambios',
      subtitle: '',
      url: '/assets/img/fare-family/Iconos/Cambios.svg',
      light: '/assets/img/fare-family/Iconos/X.svg',
      plus: 'Antes del vuelo',
      subplus: 'Bs.S 113,41',
      top: '/assets/img/fare-family/Iconos/Check top.svg',
    },

    {
  		title: 'Devolución',
      subtitle: '',
      url: '/assets/img/fare-family/Iconos/Devolución.svg',
      light: '/assets/img/fare-family/Iconos/X.svg',
      plus: 'Antes del vuelo',
      subplus: 'Bs.S 213,41',
      top: '/assets/img/fare-family/Iconos/Check top.svg',
    },

    {
  		title: 'Acumulación de Millas',
      subtitle: '',
      url: '/assets/img/fare-family/Iconos/Acumulación de millas.svg',
      light: '/assets/img/fare-family/Iconos/Check light.svg',
      plus: 'assets/img/fare-family/Iconos/Check plus.svg',
      subplus: '',
      top: '/assets/img/fare-family/Iconos/Check top.svg',
  	},

  ];

  constructor() { }

  ngOnInit() {
  }

}
