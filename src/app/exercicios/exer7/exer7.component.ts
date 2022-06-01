import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'exe-exer7',
  templateUrl: './exer7.component.html',
  styleUrls: ['./exer7.component.scss']
})
export class Exer7Component implements OnInit {

  user:any= {
    nome:"",
    senha:0,
    diaDoNascimento:1,
    cpf:""
  }
  enviar:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
valido(){
this.enviar=true
this.user= {
  nome:this.user.nome,
  senha:this.user.senha,
  diaDoNascimento:this.user.diaDoNascimento,
  cpf:this.user.cpf
}
}
}
