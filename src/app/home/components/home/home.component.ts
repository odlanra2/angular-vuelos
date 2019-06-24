import { Component, OnInit } from '@angular/core';
// import { VideosComponent } from '/modals/videos.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  /** Increíbles destinos recomendados **/
  oferts = [
    {
      name: 'Vuelos a Panamá',
      price: 'Desde',
      url: '/assets/img/Home/ofertsflight/panama.png',
    },
    {
      name: 'Vuelos a Aruba',
      price: 'Desde',
      url: '/assets/img/Home/ofertsflight/aruba.png',
    },
    {
      name: 'Vuelos a la Isla de Margarita',
      price: 'Desde',
      url: '/assets/img/Home/ofertsflight/margarita.png',
    },
    {
      name: 'Vuelos a Archipiélago Los Roques',
      price: 'Desde',
      url: '/assets/img/Home/ofertsflight/losroques.png',
    }
  ];

  /** modos para la vista del background del home **/
  /** 0: vista de video **/
  /** 1: vista de slider de imagenes **/
  backgroundMode = 0;

  /** Vivir la experiencia navicu.com **/
  modalVideos = false;
  urlVideo = false;

  ngOnInit() {
    this.checkDouwloadTime('/assets/img/Home/static/principal-plane-new.jpg', 1071168);
  }
  /** funcion que calcula la velocidad de descarga del cliente **/
  checkDouwloadTime(ruta, size) {
        const slow = 2048; // 512 kbps
        const urlImageTest = ruta + '?n=' + Math.random(); // url de la imagen
        const downloadSize = size; // tamaño de la imagen en bytes

        let startTime, endTime;
        const download = new Image();

        download.onload = function () {
            endTime = (new Date()).getTime();
            const speedBps = Math.round((downloadSize * 8) / (endTime - startTime));
            if (speedBps > slow) {
                const backgroundMode = 0;
            } else {
                const backgroundMode = 1;
            }
        };
        startTime = (new Date()).getTime();
        download.src = urlImageTest;
  }

  showVideosModal(url) {
    this.urlVideo = url;
    this.modalVideos = true;
  }

}
