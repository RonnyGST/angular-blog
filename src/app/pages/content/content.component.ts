import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Este é o banco de dados que eu criei com todas as informações de cada notícia de acordo com o seu id
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {

  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  private id: string | null = '0';

  constructor(
    private rota: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //paramMap = mapa de parâmetros da url
    this.rota.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const resultado = dataFake.filter(article => article.id == id)[0]

      this.contentTitle = resultado.title;
      this.contentDescription = resultado.description;
      this.photoCover = resultado.photoCover;
    
  }

}
