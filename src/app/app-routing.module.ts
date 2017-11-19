import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'nuevo',
    component: NuevoContactoComponent
  },
  {
    path: 'todos',
    component: MisContactosComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'todos'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
