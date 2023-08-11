import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule ],
})
export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(livroId: string) {
    this.router.navigate(['/detalhes', livroId]);
  }

  toogleFavorito(index: number): void {
    this.livros[index].favorito = !this.livros[index].favorito
  }


  nome: string = ' ';
  sobrenome: string = '';
  data: any = new Date();
  livros: Array<any> = [
    {
      id: 1,
      titulo: 'Amor de gato',
      foto: 'https://i.ibb.co/G0VnY79/amor-de-gato.jpg',
    
     
      preco: 50,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Quando ninguem está olhando',
      foto: 'https://i.ibb.co/ChXq9Z0/quando-ninguem-esta-olhando.jpg',
     
      preco: 75,
      favorito: false
    },
    {
      id: 3,
      titulo: 'O verão que mudou minha vida',
      foto: 'https://i.ibb.co/16KrXWF/img3.jpg',
    
    
      preco: 48,
      favorito: false
    },
    {
      id: 4,
      titulo: 'O Despertar',
      foto: 'https://i.ibb.co/YXV8tP2/o-despertar.jpg',
     
      preco: 43,
      favorito: false
    },
    {
      id: "rg93h8eirbgrebngn",
      titulo: 'A Transformação',
      foto: 'https://i.ibb.co/pjVMSTm/a-transforma-ao.jpg',
     
      preco: 65,
      favorito: true
    },
    {
      id: "8493ty34hg489gh",
      titulo: 'Aurora boreal',
      foto: 'https://i.ibb.co/pQ2T9MR/aurora-boreal.jpg',
     
  
      preco: 57,
      favorito: true
    }
    
  ];
}