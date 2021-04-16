import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'IronMan'];
  nameRemoveHeroe: string = '';

  removeHeroe(): void {
    this.nameRemoveHeroe = this.heroes.shift() || '';
  }
}
