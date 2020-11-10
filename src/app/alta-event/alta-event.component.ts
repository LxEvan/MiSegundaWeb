import { Component, OnInit } from '@angular/core';
import { LlistatComandesComponent } from '../llistat-comandes/llistat-comandes.component';

@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  mostrarInfo = "";
  mostrarMensaje = "";

  EnviarDatos(nombre, lloc, email, mensaje){

    if(nombre.value =="") {
      alert("El nombre esta vacío");
    }

    if(lloc.value =="") {
      this.mostrarInfo="Error!, escriu una població";

    if(email.value == "") {
      this.mostrarInfo="Error!, escriu el teu email";
    }


    }else {
      this.mostrarInfo="Incorrecto";
    }

    if(mensaje.value.length <= 2) {
      this.mostrarMensaje = "El texto introducido es demasiado corto";
    }
  }
}
