
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Importo la clase Comanda del models amb els atributs que composen la clase Comanda
import { Comanda } from '../models/dades.model';


@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent implements OnInit {

  newComanda: Comanda = null;

  // Creem un emisor d'events que enviarà la comanda creada
  @Output() comandaEvent: EventEmitter<Comanda> = new EventEmitter<Comanda>();


  constructor() { }

// Declarem les variables necessaries
  mostrarInfo = "";
  mostrarMensaje = "";


  novaComanda: string;


  ngOnInit(): void {
  }

  // Funció que s'executa a l'enviar el formulari
  onFormSubmit(itemForm: any): void {

      console.log(itemForm);
      

      // Guardem els valors del formulari en una nova comanda
      this.newComanda = new Comanda(itemForm.controls.nom.value,
                                    itemForm.controls.poblacio.value,
                                    itemForm.controls.email.value,
                                    itemForm.controls.missatge.value);

      console.log(this.newComanda);

      // Enviem l'event "comandaEvent" i li passem la comanda creada
      this.comandaEvent.emit(this.newComanda);

  }

  // Funcio per validar dades rebudes dels inputs del formulari, la funcio rep els parametres de nom, lloc, email i missatge
  EnviarDatos(nom, poblacio, email, missatge){

    // Comprovem que el valor del nom no sigui buit, si és buit enviem missattge i si és correcte recollim el valor a l'array "comandes"

    if(nom.value =="") {
      alert("El nombre esta vacío");

    }

    //comprovem el valor de la poblacio, si es buit enviem error i el mateix fem amb el correu-e

    if(poblacio.value =="") {
      this.mostrarInfo="Error!, escriu una població";

      if(email.value == "") {
        this.mostrarInfo="Error!, escriu el teu email";
      }


    }else {
      this.mostrarInfo="Incorrecto";
    }

    //fem comprovacio del text introduit al missatge

    if(missatge.value.length <= 2) {
      this.mostrarMensaje = "El texto introducido es demasiado corto";
    }



  }
}
