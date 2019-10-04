import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: IAjustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guardarAjustes() {
    console.log('guardado localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('ajustes cargados desde localstorage');
      this.aplicarTema(this.ajustes.tema);
    } else {
      console.log('Usando valores por defecto');
    }
  }

  aplicarTema(tema: string) {

    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }


}

interface IAjustes {
  temaUrl: string;
  tema: string;
}
