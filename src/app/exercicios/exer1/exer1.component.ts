import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exe-exer1',
  templateUrl: './exer1.component.html',
  styleUrls: ['./exer1.component.scss']
})
export class Exer1Component implements OnInit {
 
   valor:boolean = false
   check:boolean= true
  constructor() { }

  ngOnInit(): void {
  
  }

  inverteValor(){
    this.valor = !this.valor
    this.check = this.valor
  }

}

