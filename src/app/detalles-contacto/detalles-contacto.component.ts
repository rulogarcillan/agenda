import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';

import { Contacto } from '../contacto';
import { EventEmitter } from '@angular/core/';


@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent {

  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();
  @Input() contacto: Contacto;

  navegarFacebook(): void {
    const ruta = `https://facebook.com/${this.contacto.facebook}`;
    window.open(ruta, '_blank');
  }


  navegarTwitter(): void {
    const ruta = `https://twitter.com/${this.contacto.twitter}`;
    window.open(ruta, '_blank');
  }

  notificarContactoEliminar(contacto: Contacto): void {
    this.botonEliminarPulsado.emit(contacto);
  }

}
