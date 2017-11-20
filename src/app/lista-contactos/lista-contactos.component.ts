import { Contacto } from './../contacto';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core/';
import { Output } from '@angular/core/';
import { EventEmitter } from '@angular/core/';


@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaContactosComponent {

  @Input() contactos: Contacto[];
  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();
  @Output() contactoSeleccionado = new EventEmitter<Contacto>();

  notificarContactoEliminar(contacto: Contacto): void {
    this.botonEliminarPulsado.emit(contacto);
  }


  notificarContactoSeleccionado(contacto: Contacto): void {
    this.contactoSeleccionado.emit(contacto);
  }
}
