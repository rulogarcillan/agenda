import { ContactosService } from './contactos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import {HttpClientModule} from '@angular/common/http';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { DatosContactoPipe } from './datos-contacto.pipe';
import { OrdenacionContactosPipe } from './ordenacion-contactos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent,
    NuevoContactoComponent,
    MisContactosComponent,
    DetallesContactoComponent,
    DatosContactoPipe,
    OrdenacionContactosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

