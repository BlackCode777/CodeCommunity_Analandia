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
  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private Recibo: ReciboDashboardService) {}

  // json-server --watch db.json
  //  http://localhost:3000/recibosDashboard

  public dataDoMes: Date = new Date(); // Como pegar o mes corrente

  listaRecibos: RecibosDashboardClasse[] = [];

  ngOnInit() {
    // Buscando todos os recibos para lista
    this.getRecibosDashboard();
  }

  editarReciboJaCadastrado(recibo: RecibosDashboardClasse) {
    console.log('Atualizar recibo');
    this.Recibo.updateReciboJaCadastrado(recibo).subscribe(() => { 
      console.log('Recibo atualizado com sucesso');
      this.getRecibosDashboard();
      this.router.navigate(['editarRecibo', recibo._id]);    },
    (err: any) => { 
      console.error('Error updating recibo: ', err);
    });    
  }

  // Método para deletar recibo por id
  deletarReciboDashboard(id: string) {
    console.log('Deletar recibo');
    this.Recibo.deleteRecibo(id).subscribe(() => {
      console.log('Recibo deletado com sucesso');
      this.getRecibosDashboard();
    });
  }

  getRecibosDashboard(){
    this.Recibo.getRecibosDashboard().subscribe((recibo: RecibosDashboardClasse[] ) => {
      console.log(recibo);
      let reciboObj = Object.values(recibo);      
      this.listaRecibos = reciboObj;
    })
  
  }

  novoRecibo() {
    console.log('Novo recibo');
    this.router.navigate(['cadasRecibo']);
  }
}
