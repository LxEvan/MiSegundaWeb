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
  comandaSelected : Comanda = null;
  isCreatingNewCom : boolean = false;


//es crida a l'inicialitzar el component
  ngOnInit(): void {

    this.comandesArray.push(new Comanda('Pedro', 'Tarragona', 'pedro@gmail.com', 'hola'));
    this.comandesArray.push(new Comanda('Laura', 'Lleida', 'la@gmail.com', 'hola1'));
    this.comandesArray.push(new Comanda('Jordi', 'Girona', 'jo@gmail.com', 'hola2'));
    this.comandesArray.push(new Comanda('Isabel', 'Cambrils', 'isa@gmail.com', 'hola3'));
    this.comandesArray.push(new Comanda('Juli', 'Riudecols', 'juli@gmail.com', 'hola4'));

  }
/////////////////A PARTIR DE AQUÍ
  // Funció que s'executa al fer click(seleccionar) a un personatge de la llista
  selectCharacter(comanda: Comanda): void {

    // Treiem la interfaz de crear una comanda nova
    this.isCreatingNewCom = false;

    // Guardem a una variable de la class el personatge seleccionat
    this.comandaSelected = comanda;
  }

  // Funció per actualitzar la comanda
  updateComanda(comanda: Comanda): void {

    // Posem el valor en null per a que desapareixin les dades al forumlari
    this.comandaSelected = null;

    // Cerquem una comanda amb el mateix nom i l'actualitzem
    for (let i = 0; i < this.comandesArray.length; i++) {
      if (this.comandesArray[i].nom === comanda.nom) {
        this.comandesArray[i].poblacio === comanda.poblacio;
        this.comandesArray[i].email === comanda.email;
        this.comandesArray[i].missatge === comanda.missatge;
      }
    }
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
