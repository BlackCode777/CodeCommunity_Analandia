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

export class RecibosDashboardComponent {
  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private reciboService: ReciboDashboardService,
    private cd: ChangeDetectorRef
  ) {}

  public dataDoMes: Date = new Date(); // Como pegar o mes corrente

  listaRecibos: ClasseRecibosDashboard[] = [];

  ngOnInit() {
    // Buscando todos os recibos para lista
    this.getRecibosDashboardFindAll();
    // Pegando id da rota
    this.getParameterIdInRote()    
  }
  
  getParameterIdInRote(){
    // Pegando id da rota
    this.routeActivated.queryParams.subscribe((params) => {      
        this.reciboService.getRecibosDashboardFindAll()
          .subscribe((response) => {
            this.listaRecibos = response;
        });    
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
    return item.id ?? '';  // Use the nullish coalescing operator to return an empty string if item.id is undefined
  }

  novoRecibo() {
    console.log('Novo recibo');
    this.router.navigate(['cadasRecibo']);
  }
}
