import { Observable } from 'rxjs/Observable';
import { Contacto } from './../contacto';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MisContactosComponent implements OnInit {
  
  listaContactos: Contacto[];

  contactos$: Observable<Contacto[]>;
  constructor(private _contactosService: ContactosService) { }
  
  ngOnInit(): void {

    //forma antigua, asignado el observable manualmente y el template cambiado el valor
    /* this._contactosService.getContactos().subscribe((contactos: Contacto[])=>{
       this.listaContactos=contactos;
     });*/

     this.contactos$ = this._contactosService.getContactos()
  }

   
  eliminarContacto(contacto: Contacto): void {
 //   this.listaContactos = this._contactosService.eliminarContacto(contacto);
  }

}
