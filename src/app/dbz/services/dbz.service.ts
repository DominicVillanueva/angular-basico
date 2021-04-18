import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      name: 'Goku',
      poder: 15000,
    },
    {
      name: 'Vegeta',
      poder: 8500,
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
