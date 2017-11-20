import { Contacto } from './contacto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment'

@Injectable()
export class ContactosService {

  constructor(private _httpClient: HttpClient) { }


  getContactos(): Observable<Contacto[]> {
    return this._httpClient.get<Contacto[]>(`${environment.rutaApi}/contactos`);
  }

  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    return this._httpClient.delete<Contacto>(`${environment.rutaApi}/${contacto.id}`);
    //return this._listaContactos = this._listaContactos.filter(c => c.id !== contacto.id);
  }

  setContacto(contacto: Contacto): Observable<Contacto> {
    return this._httpClient.post<Contacto>(`${environment.rutaApi}/contactos`, contacto);
  }

}
