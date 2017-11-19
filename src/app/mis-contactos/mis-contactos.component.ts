import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MisContactosComponent implements OnInit {
  
  listaContactos: Contacto[];
  constructor(private _contactosService: ContactosService) { }
  
  ngOnInit(): void {
    this.listaContactos = this._contactosService.getContactos();
  }

   
  eliminarContacto(contacto: Contacto): void {
    this.listaContactos = this._contactosService.eliminarContacto(contacto);
  }

}
