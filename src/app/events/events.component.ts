import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comanda } from '../models/dades.model';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  category: string = 'All';

  comandesArray : Comanda [] = [];


//es crida a l'inicialitzar el component
  ngOnInit(): void {

    this.comandesArray.push(new Comanda('Pedro', 'Tarragona', 'pedro@gmail.com', 'hola'));
    this.comandesArray.push(new Comanda('Laura', 'Lleida', 'la@gmail.com', 'hola1'));
    this.comandesArray.push(new Comanda('Jordi', 'Girona', 'jo@gmail.com', 'hola2'));
    this.comandesArray.push(new Comanda('Isabel', 'Cambrils', 'isa@gmail.com', 'hola3'));
    this.comandesArray.push(new Comanda('Juli', 'Riudecols', 'juli@gmail.com', 'hola4'));

  }

  // Funció per guardar la nova comanda
  //saveComanda(): void {
   // this.saveEvent.emit(this.comanda);
 // }

  //funcio per afegir una nova comanda a l'array
    addComanda(newComanda: Comanda): void {
    this.comandesArray.push(newComanda);
  }

  canviEvent(category: string): void {
    this.category = category;
  }

}
