import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'exe-exer9',
  templateUrl: './exer9.component.html',
  styleUrls: ['./exer9.component.scss']
})
export class Exer9Component implements OnInit {
  user:any ={ 
  cliente:"",
  cpf:null,
  email:"",
  pet:"",
  id:null
  }
  regexEmail:RegExp= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  notEmail:boolean = false
  envio:boolean = false
   regexCpf:RegExp=/^[0-9]{11}$/
   notCpf:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  botaoLogin(){
    if(!this.regexEmail.test(this.user.email))
    {console.log("n/a")} else{console.log("aceito")}
  }

  validaEmail(){
    if(!this.regexEmail.test(this.user.email))
      {this.notEmail = true}else{this.notEmail = false}
  }

  validaCpf(){
    if(!this.regexCpf.test(this.user.cpf))
      {this.notCpf = true}else{this.notCpf = false}
  }
  salvar(){
    this.user= this.user;
    console.log(this.user)
  }

  confirmar(){
   alert("Salvo com sucesso")
  }

}
