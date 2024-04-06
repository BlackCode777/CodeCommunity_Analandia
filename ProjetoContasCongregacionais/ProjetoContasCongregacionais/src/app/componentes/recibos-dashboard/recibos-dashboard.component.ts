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
    this.Recibo.updateReciboJaCadastrado(recibo).subscribe(() => { // Fix: Pass the entire 'recibo' object
      console.log('Recibo atualizado com sucesso');
      this.getRecibosDashboard();
      // vou redirecionar o usuario para tela de cadastro com o id do recibo e os dados preenchidos
      this.router.navigate(['editarRecibo', recibo.id]);
    },
    (err: any) => { // Fix: Added the error parameter
      console.error('Error updating recibo: ', err);
    });
    
  }

  // Método para deletar recibo por id
  deletarReciboDashboard(id: Number) {
    console.log('Deletar recibo');
    this.Recibo.deleteRecibo(id).subscribe(() => {
      console.log('Recibo deletado com sucesso');
      this.getRecibosDashboard();
    });
  }

  getRecibosDashboard(){
    // Buscando todos os recibos para lista
    this.Recibo.getRecibosDashboard().subscribe((recibo: RecibosDashboardClasse[] ) => {
      console.log(recibo);

      // this variable is for convert array for object
      //let reciboObj1 = Object.assign({}, recibo);

      // this variable is for convert object for array
      let reciboObj = Object.values(recibo);
      
      this.listaRecibos = reciboObj;
    });
  }

  novoRecibo() {
    console.log('Novo recibo');
    this.router.navigate(['cadasRecibo']);
  }
}
