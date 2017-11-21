import { Contacto } from './../contacto';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core/';
import { Output } from '@angular/core/';
import { EventEmitter } from '@angular/core/';


@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  @Input() contactos: Contacto[];

  @Output() contactoSeleccionado = new EventEmitter<Contacto>();

  sentidoOrdenacion = 'asc';

  notificarContactoSeleccionado(contacto: Contacto): void {
    this.contactoSeleccionado.emit(contacto);
  }


  cambiarSentidoOrdenacion(): void {
    this.sentidoOrdenacion = this.sentidoOrdenacion === 'asc' ? 'desc' : 'asc';
  }
}
