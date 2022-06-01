import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exe-exer6',
  templateUrl: './exer6.component.html',
  styleUrls: ['./exer6.component.scss']
})
export class Exer6Component implements OnInit {

  nome:string =""
  cpf:number = 0
  diaDoNascimento:number = 0
  senha:string =""
  enviar:boolean = false
  constructor() { }

  ngOnInit(): void {
  }


}
