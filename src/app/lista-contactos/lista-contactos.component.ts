import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core/';
import { Output } from '@angular/core/';
import { EventEmitter } from '@angular/core/';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaContactosComponent {

  @Input() contactos: Contacto[];
  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();

  notificarContactoEliminar(contacto: Contacto): void {
    this.botonEliminarPulsado.emit(contacto);
  }

}
