import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    name: '',
    poder: 0,
  }

  constructor() {
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  ngOnInit(): void {
  }

  agregarNuevoPersonaje(arg: Personaje) {
    // this.personajes.push(arg);
  }

  // changeName(event: any) {
  //   console.log(event.target.values);
  // }
}
