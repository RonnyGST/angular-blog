import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() { }

  @Input()//Isso faz com que a propriedade abaixo seja inputável
  photoCover:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDescription:string = '';

  ngOnInit(): void {
  }

}
