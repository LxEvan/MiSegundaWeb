import { Component, OnInit } from '@angular/core';
//importo la clase Comanda del models amb els atributs que composen la clase Comanda
import { Comanda } from '../models/dades.model';

@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent implements OnInit {

  constructor() { }

// declarem les variables necessaries
  mostrarInfo = "";
  mostrarMensaje = "";
  //array que recull les dades del formulari
  comandesArray : Comanda [] = [];
  novaComanda: string;

//es crida a l'inicialitzar el component
  ngOnInit(): void {
    this.comandesArray.push(new Comanda('Pedro', 'Tarragona', 'pedro@gmail.com', 'hola'));

  }

  //funcio per validar dades rebudes dels inputs del formulari, la funcio rep els parametres de nom, lloc, email i missatge
  EnviarDatos(nom, lloc, email, mensaje){

    //comprovem que el valor del nom no sigui buit, si és buit enviem missattge i si és correcte recollim el valor a l'array "comandes"

    if(nom.value =="") {
      alert("El nombre esta vacío");

    }

    //comprovem el valor de la poblacio, si es buit enviem error i el mateix fem amb el correu-e

    if(lloc.value =="") {
      this.mostrarInfo="Error!, escriu una població";

    if(email.value == "") {
      this.mostrarInfo="Error!, escriu el teu email";
    }


    }else {
      this.mostrarInfo="Incorrecto";
    }

    //fem comprovacio del text introduit al missatge

    if(mensaje.value.length <= 2) {
      this.mostrarMensaje = "El texto introducido es demasiado corto";
    }



  }
}
