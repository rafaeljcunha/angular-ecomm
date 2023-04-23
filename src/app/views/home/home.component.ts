import { Component } from '@angular/core';
import { HomeCard } from 'src/app/core/types/home-card.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeInfos: HomeCard[] = [
    {
      title: 'Qual é o objetivo deste projeto',
      description:
        'Desenvolver um projeto para aplicar os conceitos utilizados no Angular, sendo assim, o principal objetivo é fixar o aprendizado e aprender novos conceitos.',
    },
    {
      title: 'Principais conceitos utilizados',
      description:
        'Reutilização de componentes, Decorators, Observables, Services, Models, Injeção de dependencias, Pipes, Rotas, One Way Data Binding, Two Way Data Binding, Event Binding, Diretivas e utilização do Angular Material.',
    },
    {
      title: 'O que será possível interagir neste projeto',
      description:
        'Aqui você poderá criar, exclui, atualizar e visulizar produtos, adicionar um produto ao carrinho, excluir um produto contido no carrinho, aumentar a quantidade do produto contido no carrinho, adicionar, excluir e atualizar um endereço, e com isso, selecionar um endereço no checkout e depois adicionar e excluir um método de pagamento, concluir o pedido e por fim, visualizar o pedido criado.',
    },
  ];
}
