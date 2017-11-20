import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core/';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;

}
