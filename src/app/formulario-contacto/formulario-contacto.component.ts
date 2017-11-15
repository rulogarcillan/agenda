import { Contacto } from './../contacto';

import { Component, ViewEncapsulation, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioContactoComponent {

  formularioContacto: FormGroup;

  @Output() botonGuardarPulsado = new EventEmitter<Contacto>();

  constructor(private _formsBuilder: FormBuilder) {
    this._crearFormulario();
  }

  private _crearFormulario(): void {
    this.formularioContacto = this._formsBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }],
      apellidos: '',
      telefono: '',
      email: '',
      facebook: '',
      twitter: ''
    });
  }


  notificarCrearContacto(): void {

    const contacto = this.formularioContacto.value as Contacto;
    this.botonGuardarPulsado.emit(this.formularioContacto.value);
  }
}
