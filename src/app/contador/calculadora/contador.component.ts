import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es: <strong>{{ base }}</strong></h3>
    <button (click)="acumular(base)">Sumar</button>
    <span>{{ cont }}</span>
    <button (click)="acumular(-base)">Restar</button>
  `
})

export class ContadorComponent {
  title: string = 'Contador App';
  cont: number = 0;
  base: number = 5;

  acumular(value: number) {
    this.cont += value;
  }
}
