import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo: Personaje = {
    name: '',
    poder: 0,
  };

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  agregar() {
    if (this.nuevo.name.trim().length === 0) return;
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    
    this.nuevo = {
      name: '',
      poder: 0,
    }
  }

}
