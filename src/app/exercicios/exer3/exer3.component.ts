import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exe-exer3',
  templateUrl: './exer3.component.html',
  styleUrls: ['./exer3.component.scss']
})
export class Exer3Component implements OnInit {

  arrayList: string[] = ["Até O Ultimo homem","La Casa De Papel", "Van Helsing","Anjo Da Noite","Harry Potter"]
  constructor() { }

  ngOnInit(): void {

  }

}
