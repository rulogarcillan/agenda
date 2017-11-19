import { Contacto } from './contacto';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactosService {

  private _listaContactos: Contacto[] = [
    { id:1, nombre: 'Bill', apellidos: 'Gates' },
    { id:2, nombre: 'Perry', apellidos: 'Mason' },
    { id:3, nombre: 'Mortadelo' },
    { id:4, nombre: 'Filemon' },
    { id:5, nombre: 'Ronaldo' }
  ];

  getContactos(): Contacto[] {
    return this._listaContactos;
  }

  eliminarContacto(contacto: Contacto): Contacto[] {
    return this._listaContactos = this._listaContactos.filter(c => c.id !== contacto.id);
  }

  setContacto(contacto: Contacto): void {
    this._listaContactos.push(contacto);
  }

}
