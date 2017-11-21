import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from './contacto';

@Pipe({
  name: 'ordenacionContactos'
})
export class OrdenacionContactosPipe implements PipeTransform {

  transform(contactos: Contacto[], sentido: string = 'asc'): Contacto[] {

    let ordenados: Contacto[];

    // Si la lista de contactos tiene elementos.
    if (contactos) {

      // Si el sentido de la ordenación es ascendente.
      if (sentido === 'asc') {

        ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {

          // Comparamos por nombre y apellidos.
          const nombreCompletoA = `${contactoA.nombre} ${contactoA.apellidos}`.toLowerCase();
          const nombreCompletoB = `${contactoB.nombre} ${contactoB.apellidos}`.toLowerCase();

          let comparacion: number;

          // Si el resultado de la comparación es 1, significa que A > B, por tanto A va por delante en la ordenación.
          if (nombreCompletoA > nombreCompletoB) {
            comparacion = 1;
          } else if (nombreCompletoA < nombreCompletoB) {
            comparacion = -1;
          } else {
            comparacion = 0;
          }

          return comparacion;

        });
      } else {

        ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {

          // Comparamos por nombre y apellidos.
          const nombreCompletoA = `${contactoA.nombre} ${contactoA.apellidos}`.toLowerCase();
          const nombreCompletoB = `${contactoB.nombre} ${contactoB.apellidos}`.toLowerCase();

          let comparacion: number;

          // Si el resultado de la comparación es 1, significa que B > A, por tanto B va por delante en la ordenación.
          if (nombreCompletoA < nombreCompletoB) {
            comparacion = 1;
          } else if (nombreCompletoA > nombreCompletoB) {
            comparacion = -1;
          } else {
            comparacion = 0;
          }

          return comparacion;

        });
      }
    } else {
      ordenados = [];
    }

    return ordenados;

  }

}