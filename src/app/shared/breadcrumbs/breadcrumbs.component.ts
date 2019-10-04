import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  tittleRutaActiva: string;

  constructor(private router: Router,
              private tittle: Title,
              private meta: Meta) {

    this.getDataRoute().subscribe(evento => {

      this.tittleRutaActiva = evento.titulo;
      tittle.setTitle(evento.titulo);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.tittleRutaActiva
      };

      this.meta.updateTag(metaTag);
    });
   }
  ngOnInit() {
  }

  getDataRoute() {
    return  this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd && evento.snapshot.data && evento.snapshot.data.titulo),
      map( (evento: ActivationEnd) => evento.snapshot.data)
    );
  }

}
