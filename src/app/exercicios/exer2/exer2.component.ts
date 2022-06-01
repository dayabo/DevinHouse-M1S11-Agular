import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exe-exer2',
  templateUrl: './exer2.component.html',
  styleUrls: ['./exer2.component.scss']
})
export class Exer2Component implements OnInit {
   modeOn:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  inverteValor(){
    this.modeOn = !this.modeOn
  
  }

}
