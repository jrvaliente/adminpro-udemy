import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {


  constructor() {

    this.contar3().then(
      (mensaje) => console.log('Termino!!', mensaje)
    ).catch(error => console.error('Error en la promesa' , error));
  }

  ngOnInit() {
  }

  contar3(): Promise<boolean> {

    // tslint:disable-next-line:no-shadowed-variable
   return  new Promise<boolean>((resolve ) => {

      let contador = 0;
      const intervalo = setInterval( () => {
          contador += 1;
          console.log('contador = ' , contador);
          if (contador === 3) {
            resolve(true);
            clearInterval(intervalo);
          }
      } , 1000);
    });

  }


}
