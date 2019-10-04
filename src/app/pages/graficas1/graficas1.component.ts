import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { GraficosService } from './graficos.service';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = null;

  constructor(private graficosService: GraficosService) { }

  ngOnInit() {
    this.graficos = this.graficosService.getGraficas();
  }

}
