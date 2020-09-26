import { Component } from '@angular/core';


@Component({
selector: 'app-body',
templateUrl: './app.body.component.html',
})

export class BodyComponent {
    // variable boolean
    mostrar = true;
   // propiedad para nombres
    persona: any = {
     nombre: 'Edwin',
     apellido: 'Popoca',
    };


  personajes: string[] = ['batman', 'guazon', 'venom'];

}
