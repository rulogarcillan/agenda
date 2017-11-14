import { ContactosService } from './contactos.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaContactos: string[];
  constructor(private _contactosService: ContactosService) { }

  ngOnInit(): void {
    this.listaContactos = this._contactosService.getContactos();
  }

  eliminarContacto(contacto: string): void {
    this.listaContactos = this._contactosService.eliminarContacto(contacto);
  }

  title = 'Agenda';

}
