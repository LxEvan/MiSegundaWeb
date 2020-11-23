import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comanda } from '../models/dades.model';

@Component({
  selector: 'app-modificar-event',
  templateUrl: './modificar-event.component.html',
  styleUrls: ['./modificar-event.component.css']
})
export class ModificarEventComponent implements OnInit {

  @Input() comanda : Comanda;
  @Output() saveEvent : EventEmitter<Comanda> = new EventEmitter<Comanda>();

  constructor() { }

  ngOnInit(): void {
  }

  saveComanda(): void {
    this.saveEvent.emit(this.comanda);
  }

}



