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
import { RecibosDashboardClasse } from '../../../model/RecibosDashboardClasse';
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
  novoRecibo: RecibosDashboardClasse = {
    id: 0,
    mesReciboDashboard: '',
    dataReciboDashboard: '',
    donativoObraMundRecDashboard: 0,
    donativoDespCongrLocalRecDash: 0,
    donativoTipo: '',
    arranjoDeOnibus: 0,
  };

  toHideButtonEditReceipt: boolean = false;

  ngOnInit() {
    // Cadastra um novo recibo
    //this.cadastrarecibopost();
    const id = this.route.snapshot.params['id']; // Fix: Acessando propriedade 'id' usando colchetes
    this.buscarDadosDoRecibo(id);
  }

  // Método para enviar os dados editados do recibo
  enviarDadosEditadosDoRecibo() {
    // implementation of the method
    this.recibo
      .updateReciboJaCadastrado(this.novoRecibo)
      .subscribe((recibo: RecibosDashboardClasse) => {
        this.novoRecibo = recibo;
        alert('Recibo atualizado com sucesso!');
        console.log(recibo);
        this.resetForm(); // Call the resetForm method
      });
  }

  // Método para buscar os dados do recibo e popular os campos do formulário
  buscarDadosDoRecibo(id: number) {
    this.popularCamposComDadosDoRecibo(id);
  }

  // Método para popular os campos do formulário com os dados do recibo
  popularCamposComDadosDoRecibo(id: number) {
    this.recibo.getRecibosPorId(id).subscribe((recibo: RecibosDashboardClasse) => {
      this.novoRecibo = recibo;
    });
  }

  cadastrarecibopost() {
    // implementation of the method
    this.recibo
      .cadastraReciboPost(this.novoRecibo)
      .subscribe((recibo: RecibosDashboardClasse) => {
        this.novoRecibo = recibo
        alert('Recibo cadastrado com sucesso!');
        //this.novoRecibo = recibo[0];
        console.log(recibo);
        this.resetForm(); // Call the resetForm method
      });
  }

  resetForm() {
    // Implemente a lógica para resetar seu formulário aqui
    this.novoRecibo = {
      id: 0,
      mesReciboDashboard: '',
      dataReciboDashboard: '',
      donativoObraMundRecDashboard: 0,
      donativoDespCongrLocalRecDash: 0,
      donativoTipo: '',
      arranjoDeOnibus: 0,
    };
  }
}

// let reciboCadastrado = recibo; recibosDashboard
//this.novoRecibo = ["recibo"];
//this.novoRecibo = ["recibosDashboard"];
// this.novoRecibo.arranjoDeOnibus = reciboCadastrado.arranjoDeOnibus;
// this.novoRecibo.dataReciboDashboard = reciboCadastrado.dataReciboDashboard;
// this.novoRecibo.donativoDespCongrLocalRecDash = reciboCadastrado.donativoDespCongrLocalRecDash;
// this.novoRecibo.donativoObraMundRecDashboard = reciboCadastrado.donativoObraMundRecDashboard;
// this.novoRecibo.donativoTipo = reciboCadastrado.donativoTipo;
// this.novoRecibo.mesReciboDashboard = reciboCadastrado.mesReciboDashboard;
