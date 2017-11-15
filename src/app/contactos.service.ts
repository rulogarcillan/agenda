import { Injectable } from '@angular/core';

@Injectable()
export class ContactosService {

  private _listaContactos: string[] = [
    'Bill Gates',
    'Perry Mason',
    'Mortadelo',
    'Filemon',
    'Ronaldo'
  ];


  getContactos(): string[] {
    return this._listaContactos;
  }

  eliminarContacto(contacto: string): string[] {
    return this._listaContactos = this._listaContactos.filter(c => c !== contacto);
  }

  setContacto(contacto: string): void {
    this._listaContactos.push(contacto);
  }

}
