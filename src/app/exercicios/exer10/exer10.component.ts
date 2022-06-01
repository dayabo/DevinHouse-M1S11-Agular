import { Component, OnInit } from '@angular/core';
interface Icadastro{
produto:string
}
@Component({
  selector: 'exe-exer10',
  templateUrl: './exer10.component.html',
  styleUrls: ['./exer10.component.scss']
})
export class Exer10Component implements OnInit {

 cadastros:Icadastro[] = []

    cadastrar: Icadastro = 
    {
   produto:""
    }

    vazio:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  cadastra( ){
    this.cadastros.push(this.cadastrar)
    this.cadastrar={
      produto:""
    }
    this.vazio =true
}
}