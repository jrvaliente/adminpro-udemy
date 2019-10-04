import { Component, OnInit, Inject, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

// tslint:disable-next-line:no-unused-expression


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // @ViewChild('a') selectores: ElementRef[];
  // @ViewChildren('link') selectores: QueryList<any>;


  constructor( @Inject(DOCUMENT) private _document, public _ajustesService: SettingsService) { }

  ngOnInit() {
    this.actualizarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._ajustesService.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
   const selectores: any = document.getElementsByClassName('selector');
    for ( const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  actualizarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const ajustes = this._ajustesService.ajustes;
    for ( const ref of selectores) {
      if (ajustes && ref.getAttribute('data-theme') === ajustes.tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
