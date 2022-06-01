import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exer1Component } from './exercicios/exer1/exer1.component';
import { Exer2Component } from './exercicios/exer2/exer2.component';
import { Exer3Component } from './exercicios/exer3/exer3.component';
import { Exer4Component } from './exercicios/exer4/exer4.component';
import { Exer5Component } from './exercicios/exer5/exer5.component';
import { Exer6Component } from './exercicios/exer6/exer6.component';
import { Exer7Component } from './exercicios/exer7/exer7.component';
import { Exer8Component } from './exercicios/exer8/exer8.component';
import { Exer9Component } from './exercicios/exer9/exer9.component';
import { Exer10Component } from './exercicios/exer10/exer10.component';

@NgModule({
  declarations: [
    AppComponent,
    Exer1Component,
    Exer2Component,
    Exer3Component,
    Exer4Component,
    Exer5Component,
    Exer6Component,
    Exer7Component,
    Exer8Component,
    Exer9Component,
    Exer10Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
