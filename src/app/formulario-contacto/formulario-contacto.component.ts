import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioContactoComponent {

  formularioContacto: FormGroup;

  constructor(private _formsBuilder: FormBuilder) {
    this._crearFormulario();
  }

  private _crearFormulario(): void {
    this.formularioContacto = this._formsBuilder.group({
      nombre: ['', { validators: [Validators.required, Validators.minLength(3)] }]
    });
  }


  notificarCrearContacto(): void {
    console.log(this.formularioContacto);
  }
}
