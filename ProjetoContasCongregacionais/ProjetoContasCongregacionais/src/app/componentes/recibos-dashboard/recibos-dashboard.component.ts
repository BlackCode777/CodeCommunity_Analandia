import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { RecibosDashboardClasse } from '../../model/RecibosDashboardClasse';
import { ReciboDashboardService } from '../../service/recibo-dashboard.service';
import { RecibosCadasComponent } from '../cadastros/recibos-cadas/recibos-cadas.component';

@Component({
  selector: 'app-recibos-dashboard',
  standalone: true,
  imports: [
    CommonModule,

    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    RecibosCadasComponent,
  ],
  providers: [ReciboDashboardService],
  templateUrl: './recibos-dashboard.component.html',
  styleUrl: './recibos-dashboard.component.scss',
})
export class RecibosDashboardComponent {
  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private Recibo: ReciboDashboardService
  ) {}

  // json-server --watch db.json
  //  http://localhost:3000/recibosDashboard

  public dataDoMes: Date = new Date(); // Como pegar o mes corrente

  listaRecibos: RecibosDashboardClasse[] = [];

  ngOnInit() {
    // Buscando todos os recibos para lista
    this.getRecibosDashboardFindAll();
    //this.routeActivated.queryParams.pipe()
    this.routeActivated.queryParams.subscribe((params) => {
      let _id = params['_id'];
      if (_id !== null && _id !== undefined && _id.lenght > 0) {
        this.Recibo.getRecibosDashboardFindAll()
          .pipe()
          .subscribe((response) => {
            this.listaRecibos = response;
            let i = 0;
            this.listaRecibos.forEach((element) => {
              i++;
              if (element._id === _id) {
                this.editarReciboJaCadastrado(element);
              }
              if (i === this.listaRecibos.length) {
                this.router.navigate(['cadasRecibo']);
              }
            });
          });
      }
    });
  }

  editarReciboJaCadastrado(recibo: RecibosDashboardClasse) {
    console.log('Atualizar recibo');
    this.Recibo.updateReciboJaCadastrado(recibo).subscribe(
      () => {
        console.log('Recibo atualizado com sucesso');
        this.getRecibosDashboardFindAll();
        this.router.navigate(['editarRecibo', recibo._id]);
      },
      (err: any) => {
        console.error('Error updating recibo: ', err);
      }
    );
  }

  // Método para deletar recibo por id
  deletarReciboDashboard(_id: string) {
    console.log('Deletar recibo');
    this.Recibo.deleteRecibo(_id).subscribe(() => {
      console.log('Recibo deletado com sucesso');
      this.getRecibosDashboardFindAll();
    });
  }

  getRecibosDashboardFindAll() {
    this.Recibo.getRecibosDashboardFindAll().subscribe(
      (recibo: RecibosDashboardClasse[]) => {
        console.log(recibo);
        let reciboObj = Object.values(recibo);
        this.listaRecibos = reciboObj;
      }
    );
  }

  novoRecibo() {
    console.log('Novo recibo');
    this.router.navigate(['cadasRecibo']);
  }
}


/*

// Método para desestruturar lista
  desestruturarLista(lista: number[]) {
    let [a, b, c, d, e, f, g, h, i, j] = lista;
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('c: ', c);
    console.log('d: ', d);
    console.log('e: ', e);
    console.log('f: ', f);
    console.log('g: ', g);
    console.log('h: ', h);
    console.log('i: ', i);
    console.log('j: ', j);
  }

console.log('************************************');
console.log('******_ EstudoTypescript _******');
console.log('******_Desestruturação-listas_******');

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Usando uma função para desestruturar
this.desestruturarLista(lista);

console.log('************************************');
console.log('******_ EstudoTypescript _******');
console.log('************************************');


Vamos lá:

class Pessoa {
  id: number;
  nome: string;
  data: Date;
  idade: number;
}

let listaDePessoas: Pessoa[] = [
  { id: 1, nome: 'João', data: new Date(), idade: 20 },
  { id: 2, nome: 'Maria', data: new Date(), idade: 30 },
  { id: 3, nome: 'José', data: new Date(), idade: 40 },
  { id: 4, nome: 'Ana', data: new Date(), idade: 50 },
  { id: 5, nome: 'Carlos', data: new Date(), idade: 60 },
];

// Agora vamos desestruturar a listaDePessoas
listaDePessoas.forEach((pessoa) => {
  let { nome, idade } = pessoa;
});

- Agora me mostre como fazer isso em TypeScript. Partindo desse contexto:
this.listaReciboService.getRecibos().subscribe((recibos: Recibo[]) => {
  recibos.forEach((recibo) => {
    let { nome, idade } = recibo;
  });
});

Vamos lá:

this.listaReciboService.getRecibos().subscribe((recibos: Recibo[]) => {
  recibos.forEach((recibo) => {
    let { nome, idade } = recibo;
  });
});

- Uma dúvida: eu preciso criar uma variável para cada propriedade que eu quero desestruturar?
antes de responder, vamos ver um exemplo:
let pessoa = { nome: 'João', idade: 20, cidade: 'São Paulo' };
let { nome, idade, cidade } = pessoa;

- eu poderia criar assim, veja:
public pessoaDesest = { nome: 'João', idade: 20, cidade: 'São Paulo' };

- e depois fazer assim: 
this.pessoaDesest = { nome, idade, cidade } = pessoa;

- usando na função
funcDesestruturacaoListas( pessoa: Pessoa ) {
  let Array<{ nome, idade, cidade }> = pessoa;
  
  if (pessoa) {
    if (nome && idade && cidade) {
      console.log('Nome: ', nome);
      console.log('Idade: ', idade);
      console.log('Cidade: ', cidade);
    }
  }
  - validando a existencia de todas as  propriedade
*/