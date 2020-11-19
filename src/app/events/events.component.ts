import { Component, OnInit } from '@angular/core';
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
  }

  //funcio per afegir una nova comanda a l'array
  addComanda(newComanda: Comanda): void {
    this.comandesArray.push(newComanda);
  }

  canviEvent(category: string): void {
    this.category = category;
  }

}
