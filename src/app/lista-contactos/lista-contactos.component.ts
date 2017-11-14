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

  @Input() contactos: String[];
  @Output() botonEliminarPulsado = new EventEmitter<string>();

  notificarContactoEliminar(contacto: string): void {


    this.botonEliminarPulsado.emit(contacto);
  }

}
