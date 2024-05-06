import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ClasseRecibosDashboard } from '../../model/RecibosDashboardClasse';
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


// function LogRouteParameter(target: any, key: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function(...args: any[]) {
//     // Aqui 'args' são os argumentos com os quais 'getParameterIdInRote' pode ser chamada, que no caso de Angular geralmente não são utilizados.
//     if (this.routeActivated.snapshot.queryParams['id']) {
//       console.log(`Function ${key} called with route ID: ${this['routeActivated'].snapshot.queryParams['id']}`);
//       const result = originalMethod.apply(this, args);
//       return result;
//     } else {
//       console.log(`Function ${key} called without valid route ID`);
//       return null;
//     }
//   };
// return descriptor;
// }

export class RecibosDashboardComponent {
  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private reciboService: ReciboDashboardService,
    private cd: ChangeDetectorRef
  ) {}

  public dataDoMes: Date = new Date(); // Como pegar o mes corrente

  listaRecibos: any[] = [];

  ngOnInit() {
    // Buscando todos os recibos para lista
    this.getRecibosDashboardFindAll();
    // Pegando id da rota
    this.getParameterIdInRote()    
  }

  // Melhorando a função com pipe / witchMap
  // getParameterIdInRote(){
  //   // Pegando id da rota
  //   this.routeActivated.queryParams.pipe(
  //     filter(params => params['id'] && params['id'].lenght > 0),
  //     switchMap(params => this.reciboService.getRecibosDashboardFindAll())
  //   ).subscribe((response) => {
  //     this.listaRecibos = response;
  //   }, error => console.error('Erro ao carregar recibos:', error));    
  // }


  getParameterIdInRote(){
    // Pegando id da rota
    this.routeActivated.queryParams.subscribe((params) => {
      let id = params['id'];
      if (id !== null && id !== undefined && id.lenght > 0) {
        this.reciboService.getRecibosDashboardFindAll()
          .subscribe((response) => {
            this.listaRecibos = response;
          });
      }
    });
  }


  // editarReciboJaCadastrado(recibo: RecibosDashboardClasse) {
  //   console.log('Atualizar recibo');
  //   this.Recibo.updateReciboJaCadastrado(recibo).subscribe(
  //     () => {
  //       console.log('Recibo atualizado com sucesso');
  //       this.getRecibosDashboardFindAll();
  //       this.router.navigate(['editarRecibo', recibo._id]);
  //     },
  //     (err: any) => {
  //       console.error('Error updating recibo: ', err);
  //     }
  //   );
  // }

  // Método para deletar recibo por id
  // deletarReciboDashboard(_id: string) {
  //   console.log('Deletar recibo');
  //   this.Recibo.deleteRecibo(_id).subscribe(() => {
  //     console.log('Recibo deletado com sucesso');
  //     this.getRecibosDashboardFindAll();
  //   });
  // }

  getRecibosDashboardFindAll() {
    this.reciboService.getRecibosDashboardFindAll().subscribe({
      next: (recibos: any) => {
        //console.log("Recibo DonativoObraMundial ->>> ", recibos.donativoObraMundRecDashboard)
        this.listaRecibos = recibos;
        this.cd.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar recibos:', err)
    });
  }

  trackById(index: number, item: ClasseRecibosDashboard): string {
    return item._id;  // Certifique-se de que é `id`, e não `_id`
  }

  novoRecibo() {
    console.log('Novo recibo');
    this.router.navigate(['cadasRecibo']);
  }
}
