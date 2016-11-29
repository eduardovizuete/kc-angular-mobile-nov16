import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from "./lista-contactos/lista-contactos.component";

@NgModule({
  // Usamos 'imports' para importar otros módulos
  // de los cuáles dependedemos.
  imports: [
    BrowserModule
  ],
  // En 'declarations' añadimos todos los componentes,
  // pipes y directivas de nuestra aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  // En 'providers' añadimos todos los servicios de
  // nuestra aplicación.
  providers: [],
  // En 'bootstrap' indicamos el componente raíz de
  // nuestra aplicación.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }