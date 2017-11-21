import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core/';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;


  navegarFacebook(): void {
    const ruta = `https://facebook.com/${this.contacto.facebook}`;
    window.open(ruta, '_blank');
  }


  navegarTwitter(): void {
    const ruta = `https://twitter.com/${this.contacto.twitter}`;
    window.open(ruta, '_blank');
  }

}
