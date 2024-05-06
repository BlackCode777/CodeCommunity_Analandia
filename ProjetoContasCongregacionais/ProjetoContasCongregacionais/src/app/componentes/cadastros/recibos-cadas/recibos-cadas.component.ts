import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea'; // Importar InputTextareaModule
import { TableModule } from 'primeng/table';
import { ClasseRecibosDashboard } from '../../../model/RecibosDashboardClasse';
import { ReciboDashboardService } from '../../../service/recibo-dashboard.service';

/**
 * import { InputTextModule } from 'primeng/inputtext'; // Importar InputTextModule
 */

@Component({
  selector: 'app-recibos-cadas',
  standalone: true,
  imports: [
    CommonModule,

    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    //PanelModule,
    ButtonModule,
    InputTextareaModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,

    HttpClientModule,
  ],
  providers: [ReciboDashboardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './recibos-cadas.component.html',
  styleUrl: './recibos-cadas.component.scss',
})
export class RecibosCadasComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recibo: ReciboDashboardService
  ) {}

  // Supondo que você tenha um formulário vinculado a este modelo
  novoRecibo: ClasseRecibosDashboard = {
    _id: '',
    mesReciboDashboard: '',
    dataReciboDashboard: '',
    donativoObraMundRecDashboard: 0,
    donativoDespCongrLocalRecDash: 0,
    donativoTipo: '',
    arranjoDeOnibus: 0,
  };

  toHideButtonEditReceipt: boolean = false;

  ngOnInit() {
    const _id = this.route.snapshot.params['_id']; // Fix: Acessando propriedade 'id' usando colchetes
    this.buscarDadosDoRecibo(_id);
  }

  // Método para enviar os dados editados do recibo
  // enviarDadosEditadosDoRecibo() {
  //   // implementation of the method
  //   this.recibo
  //     .updateReciboJaCadastrado(this.novoRecibo)
  //     .subscribe((recibo: RecibosDashboardClasse) => {
  //       this.novoRecibo = recibo;
  //       alert('Recibo atualizado com sucesso!');
  //       console.log(recibo);
  //       this.resetForm(); // chamada do método resetForm
  //     });
  // }
  
  // Método para buscar os dados do recibo e popular os campos do formulário
  buscarDadosDoRecibo(_id: number) {
    //this.popularCamposComDadosDoRecibo(_id);
  }

  // Método para popular os campos do formulário com os dados do recibo
  // popularCamposComDadosDoRecibo(id: number) {
  //   this.recibo.getRecibosPorId(id).subscribe((recibo: RecibosDashboardClasse) => {
  //     this.novoRecibo = recibo;
  //   });
  // }

  cadastrarecibopost() {
    // implementation of the method
    this.recibo
      .cadastraReciboPost(this.novoRecibo)
      .subscribe((recibo: any) => {
        this.novoRecibo = recibo
        alert('Recibo cadastrado com sucesso!');
        this.novoRecibo = recibo;
        console.log(recibo);
        this.resetForm(); // Chamada do método resetForm
      });
  }

  resetForm() {
    // Implemente a lógica para resetar seu formulário aqui
    this.novoRecibo = {
      _id: '',
      mesReciboDashboard: '',
      dataReciboDashboard: '',
      donativoObraMundRecDashboard: 0,
      donativoDespCongrLocalRecDash: 0,
      donativoTipo: '',
      arranjoDeOnibus: 0,
    };
  }
}

/*

copilot voou mudar um pouco a abordagem do código com relação ao CRUD que estou fazendo em outro sistema,

preciso criar um cadastro de usuários com seus perfis relacionados para que cads um tenha acesso a determinadas funcionalidades do sistema.

a abordagem que eu usei foi criando uma API FAKE com json-server e estou fazendo as requisições HTTP com o Angular, mas estou 
com erro ao fazer qualquer requisição HTTP, seja ela GET, POST, PUT ou DELETE. porque a porta que o json-server
é "http://localhost:3000/usuarios" e a porta do angular é "http://localhost:4200", e estou com esse erro "permissao-users:
1 Access to XMLHttpRequest at 'http://localhost:3000/usuarios' from origin 'http://localhost:4200' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."

Ja tentei várias abordagens para resolver esse problema, mas não consegui, poderia me ajudar a resolver esse problema?

1) - Vamos começar com os serviços de requisição HTTP, você poderia me mostrar como você está fazendo as requisições HTTP no Angular
      para métodos GET / PUT / POST / DELETE?

2) - Você poderia me mostrar como está a estrutura do seu projeto Angular? OK
      component.html
        listagem de usuários com botão de edição e exclusão
        <!DOCTYPE html>
        <section class="main-section-table">
            <h3>Cadastro de Perfil de usuários</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome do usuário</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Senha</th>
                        <th scope="col">Perfil</th>
                        <th scope="col">Edição</th>
                        <th scope="col">Exclusão</th>
                    </tr>
                </thead>
                <tbody>
                    @for (users of userPerfilControl; track users.id) {
                        <tr>
                            <td>{{ users.id }}</td>
                            <td>{{ users.nome }}</td>
                            <td>{{ users.cpf }}</td>
                            <td>{{ users.senha }}</td>
                            <td>{{ users.perfis }}</td>
                            <td>
                                <button class="btn btn-primary">Editar Perfil
                                </button></td>
                            <td>
                                <button class="btn btn-danger" (click)="deletePerfilUsuario(users.id)">Deletar</button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>        
        </section>

      component.ts
        import { CommonModule } from '@angular/common';
        import { Component } from '@angular/core';
        import { FormsModule, ReactiveFormsModule } from '@angular/forms';
        import { MatCardModule } from '@angular/material/card';
        import { MatDialog } from '@angular/material/dialog';
        import { MatMenuModule } from '@angular/material/menu';
        import { MatPaginatorModule } from '@angular/material/paginator';
        import { MatSidenavModule } from '@angular/material/sidenav';
        import {
            RouterLink,
            RouterOutlet,
            RouterModule,
            RouterLinkActive,
            ActivatedRoute,
            Router,
        } from '@angular/router';
        import { ControlePermissaoUsers } from '../../../modal/ControlePermissaoUsers';
        import { HttpClientModule } from '@angular/common/http';
        import { ControlePerfilUsersService } from '../../../service/controle-perfil-users.service';
        
        import { ButtonModule } from 'primeng/button';
        import { CalendarModule } from 'primeng/calendar';
        import { CheckboxModule } from 'primeng/checkbox';
        import { DropdownModule } from 'primeng/dropdown';
        import { InputTextModule } from 'primeng/inputtext';
        import { TableModule } from 'primeng/table';
        
        @Component({
            selector: 'app-controle-perfil-user',
            standalone: true,
            imports: [
                MatSidenavModule,
                MatCardModule,
                MatMenuModule,
                CommonModule,
                RouterLinkActive,
                RouterLink,
                RouterOutlet,
                RouterModule,
                FormsModule,
                MatPaginatorModule,
                HttpClientModule,
                ButtonModule,
                InputTextModule,
                DropdownModule,
                CalendarModule,
                CheckboxModule,
                ReactiveFormsModule,
                TableModule,
            ],
            templateUrl: './controle-perfil-user.component.html',
            styleUrl: './controle-perfil-user.component.scss',
        })
        export class ControlePerfilUserComponent {
            constructor(
                private route: ActivatedRoute,
                private router: Router,
                public dialog: MatDialog,
                public userPerfil: ControlePerfilUsersService
            ) {}
            // Dados da tabela
            userPerfilControl: ControlePermissaoUsers | any;
            ngOnInit() {
                // Popula os campos da tabela
                this.getRecibosDashboard();
            }
            saveUser() {}
        
            // Método para deletar recibo por id
            deletePerfilUsuario(id: number) {
                console.log('Deletar perfil');
                this.userPerfil.deletePerfilUsuario(id).subscribe(() => {
                    alert('Usuário deleta com sucesso!');
                    this.getRecibosDashboard();
                });
            }
        
            getRecibosDashboard() {
                // Buscando todos os recibos para lista
                this.userPerfil
                    .getPerfilUsuarios()
                    .subscribe((perfil: ControlePermissaoUsers) => {
                        console.log(perfil);
                        console.assert(perfil, 'perfil não pode ser nulo');
                        this.userPerfilControl = perfil;
                    });
            }
        }


      service.ts
        import { Injectable } from '@angular/core';
        import { ControlePermissaoUsers } from '../modal/ControlePermissaoUsers';
        import { HttpClient, HttpHeaders } from '@angular/common/http';
        import { Observable } from 'rxjs';
        
        @Injectable({
            providedIn: 'root',
        })
        export class ControlePerfilUsersService {
            apiUsers = 'http://localhost:3000/usuarios';
            httpOptions = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
                withCredentials: true,
            };
        
            constructor(private http: HttpClient) {}
        
            public getPerfilUsuarios(): Observable<ControlePermissaoUsers> {
                return this.http.get<ControlePermissaoUsers>(this.apiUsers, {
                    withCredentials: true,
                });
            }
        
            public getUsersPerfilPorCPF(CPF: any): Observable<ControlePermissaoUsers> {
                return this.http.get<ControlePermissaoUsers>(this.apiUsers + CPF, {
                    withCredentials: true,
                });
            }
        
            public putUsersPerfil(
                userProfile: ControlePermissaoUsers
            ): Observable<ControlePermissaoUsers> {
                return this.http.put<ControlePermissaoUsers>(
                    this.apiUsers,
                    userProfile,
                    { withCredentials: true }
                );
            }
        
            // criar para deletar recibos
            deletePerfilUsuario(id: number): Observable<ControlePermissaoUsers> {
        
                console.log(' Cheguei no ID do service >>> ', id);
        
                return this.http.delete<ControlePermissaoUsers>(
                    this.apiUsers + '/' + id,
                    this.httpOptions
                );
            }
        }

3) - Você poderia me mostrar como está a estrutura do seu projeto json-server?
        {
                "usuarios": [
                        {
                                "id":1,
                                "CPF": 10044451200,
                                "nome": "Anderson Martins",
                                "senha": "senha123",
                                "perfis": ["Administrador"]
                        },
                        {
                                "id":2,
                                "CPF": 11122233344,
                                "nome": "Julia Carvalho",
                                "senha": "senha456",
                                "perfis": ["Usuário"]
                        },
                        {
                                "id":3,
                                "CPF": 55566677788,
                                "nome": "Marcos Silva",
                                "senha": "senha789",
                                "perfis": ["Convidado"]
                        }
                ]
        }
  
Esse é o contexto do problema, se puder me ajudar a resolver esse problema, ficarei muito grato.

primeiro gostaria de saber se você está usando o Angular CLI para criar o projeto Angular, se sim, qual a versão do Angular CLI que você está usando? Sim, estou usando versãp 17

primeiro eu gostaria de refatorar os métodos de delete, edição e listagem de usuários no service.ts e no component.ts,
para que não tenha este bloqueio de CORS para que eu possa deletar, cadastrar, editar e listar os perfis e fazer as requisições HTTP sem problemas.

agora me mostre exemplos de código para resolver este problema. vamos começar com o service.ts e o compoment.ts.
fazendo o método de delete

service.ts
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }

  // criar para deletar recibos
  deletePerfilUsuario(id: number): Observable<ControlePermissaoUsers>{
    return this.http.delete<ControlePermissaoUsers>(this.apiUsers + '/' + id, { responseType: 'json', withCredentials: true });
  }

component.ts
  // Método para deletar recibo por id
  deletePerfilUsuario(id: number) {
    console.log('Deletar perfil');
    this.userPerfil.deletePerfilUsuario(id).subscribe(() => {
      alert('Usuário deleta com sucesso!');
      this.getRecibosDashboard();
    });
  }

com esse código fornecido eu obtive este erro:
  "Access to XMLHttpRequest at '
  http://localhost:3000/usuarios/3'
  from origin '
  http://localhost:4200'
  has been blocked by CORS policy: 
  Response to preflight request doesn't pass access control check: 
  The value of the 'Access-Control-Allow-Origin' header in the response 
  must not be the wildcard '*' when the request's credentials mode is 'include'. 
  The credentials mode of requests initiated by the XMLHttpRequest is controlled 
  by the withCredentials attribute."

  e pelo que estou observando o erro está relacionado a passagem do cabeçalho
  que não está sendo envado junto com requisição, como posso resolver isso?

  para resolver este problema, você deve adicionar o cabeçalho 'withCredentials'
  no objeto 'httpOptions' e passar este objeto como parâmetro para o método 'delete'
  da biblioteca HttpClient do Angular.

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }

  // criar para deletar recibos
  deletePerfilUsuario(id: number): Observable<ControlePermissaoUsers>{
    return this.http.delete<ControlePermissaoUsers>(this.apiUsers + '/' + id, this.httpOptions);
  }

  mas dessa maneira eu já tentei e não funcionou, o que mais posso fazer para resolver este problema?
  
  como posso garantir que ao fazer a requisição HTTP para deletar um usuário, o cabeçalho 
  'httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }' 
  seja enviado junto com a requisição?

  mostre outras opções de código para resolver este problema.

  



*/
