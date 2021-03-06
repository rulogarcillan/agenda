import { Observable } from 'rxjs/Observable';
import { Contacto } from './../contacto';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  listaContactos: Contacto[];
  contactoSeleccionado: Contacto;

  contactos$: Observable<Contacto[]>;
  constructor(private _contactosService: ContactosService) { }

  ngOnInit(): void {

    // forma antigua, asignado el observable manualmente y el template cambiado el valor
    /* this._contactosService.getContactos().subscribe((contactos: Contacto[])=>{
       this.listaContactos=contactos;
     });*/

    this.contactos$ = this._contactosService.getContactos();
  }

  private _recuperarContactosDesdeServidor(): void {

    this.contactos$ = this._contactosService.getContactos();


  }

  verDetallesContactos(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;

  }
  preguntarEliminarContacto(contacto: Contacto): void {

    if (confirm(`¿Estas seguro que deseas eliminar el contacto ${contacto.nombre} ${contacto.apellidos}`)) {
      this._contactosService.eliminarContacto(contacto).subscribe(() => {
        this.contactoSeleccionado = null;
        this._recuperarContactosDesdeServidor();
      });

    }
  }
}
