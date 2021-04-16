import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  name: string = 'Iron Man';
  age: number = 45;

  get nameCapitalizado(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = 'Spider Man';
  }

  changeAge(): void {
    this.age = 24;
  }
}
