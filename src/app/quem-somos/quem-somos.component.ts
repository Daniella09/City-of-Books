import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {


  imovelId: string | undefined;

  titulo: string = 'Casa Magnífica';
  foto: string = 'https://i.ibb.co/3Mm5CWZ/qs.png';

  description: string = 'Aqui, apresento a vocês o resultado dessa nova edição da marca, feita internamente em um processo colaborativo, com o objetivo de me conectar ainda mais com os apaixonados por livros';
  description2: string ='Fui criada, em 2005, com o objetivo de reunir acervos de livros em um único portal. Conecto leitores a pequenos livreiros, reúno exemplares novos e seminovos, estimulo o consumo consciente e ajudo a democratizar a leitura no Brasil, ao oferecer livros a preços acessíveis.';
  descreption: string = 'Apoiada em uma economia circular, fomentada por uma comunidade dedicada em disseminar a leitura e o amor pelos livros, sou mais do que uma plataforma digital. Conecto pessoas a novas histórias.';

}
