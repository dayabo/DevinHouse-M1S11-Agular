import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exe-exer4',
  templateUrl: './exer4.component.html',
  styleUrls: ['./exer4.component.scss']
})
export class Exer4Component implements OnInit {
  arrayFotos: any = [
    {
      url: "assets/img/africa.jpg",
      description:"Paissagem da Africa"
    },
    {
      url: "assets/img/paris.jpg",
      description:"Torre de Paris"
    },
    {
      url: "assets/img/sardenha.jpg",
      description:"Paissagem de Sardenha"
    },
    {
      url: "assets/img/OIP.jpg",
      description:"Foto do farol"
    },
    {
      url: "assets/img/R.jpg",
      description:"Paissagem do Por do Sol"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
