import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry, map, filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();

  constructor() {


    this.regresaObservable().pipe(
      // retry(2),
       takeUntil(this.unsubscribe$)
    ).subscribe(resp => {
      console.log('Subs ' , resp);
    },
    error => {
      console.error('Error subs ', error);
    },
    () => console.log('TERMINO'));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {

    console.log('Nos salimos del componente');
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return  new Observable<any>((observer) => {

      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;

        const value = {
          valor: contador
        };
        observer.next( value );

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('No es 2');
        // }
      }, 1000);
    }).pipe(
      // filter((resp, index) => resp.valor % 2 !== 0),
      map(resp => resp.valor)
    );

  }

}
