import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  listaContactos: string[] = [
    'Bill Gates',
    'Perry Mason',
    'Mortadelo',
    'Filemon',
    'Ronaldo'
  ];
  ngOnInit(): void {
    console.log('Hola agenda');
  }

  eliminarContacto(contacto: string): void {
    this.listaContactos = this.listaContactos.filter(c => c !== contacto);
  }

  title = 'Agenda';

}
