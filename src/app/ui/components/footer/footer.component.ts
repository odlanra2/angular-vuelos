import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  destinations = [
    {
      type: 'Fanáticos del mar',
      url: '/assets/img/Home/footer/mar.svg',
      locations: [
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/estado/vargas',
          name: 'Vargas',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/municipio/ocumare-de-la-costa-de-oro',
          name: 'Ocumare de la Costa de Oro',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/municipio/atanasio-girardot',
          name: 'Atanasio Girardot',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/municipio/jose-laurencio-silva',
          name: 'José Laurencio Silva',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/punto-fijo',
          name: 'Punto Fijo',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/municipio/los-roques',
          name: 'Los Roques',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/isla/isla-de-margarita',
          name: 'Isla de Margarita',
        },
      ],
    },
    {
      type: 'Favoritos urbanos',
      url: '/assets/img/Home/footer/city.svg',
      locations: [
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/estado/aragua',
          name: 'Aragua',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/estado/miranda',
          name: 'Miranda',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/maracay',
          name: 'Maracay',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/barquisimeto',
          name: 'Barquisimeto',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/maracaibo',
          name: 'Maracaibo',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/caracas',
          name: 'Caracas',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/valencia',
          name: 'Valencia',
        },
      ],
    },
    {
      type: 'Climas perfectos',
      url: '/assets/img/Home/footer/clima.svg',
      locations: [
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/municipio/aragua-tovar',
          name: 'Tovar',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/estado/tachira',
          name: 'Táchira',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/estado/trujillo',
          name: 'Trujillo',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/san-cristobal',
          name: 'San Cristóbal',
        },
      ],
    },
    {
      type: 'Paisajes de película',
      url: '/assets/img/Home/footer/pelicula.svg',
      locations: [
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/coro',
          name: 'Coro',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/gran-sabana',
          name: 'Gran Sabana',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/ciudad-guayana',
          name: 'Ciudad Guayana',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/merida',
          name: 'Mérida',
        },
      ],
    },
    {
      type: 'Recorrido cultural',
      url: '/assets/img/Home/footer/cultural.svg',
      locations: [
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/barcelona',
          name: 'Barcelona',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/araure',
          name: 'Araure',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/el-tigre',
          name: 'El Tigre',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/guatire',
          name: 'Guatire',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/tariba',
          name: 'Táriba',
        },
      ],
    },
    {
      type: 'Aventura familiar',
      url: '/assets/img/Home/footer/familia.svg',
      locations: [
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/estado/anzoategui',
          name: 'Anzoátegui',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/estado/falcon',
          name: 'Falcón',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/barinas',
          name: 'Barinas',
        },
        {
          url: 'http://www.navicu.dv/app_dev.php/VE/ciudad/ciudad-ojeda',
          name: 'Ciudad Ojeda',
        },
      ],
    }
  ];

  ngOnInit() {
  }

}
