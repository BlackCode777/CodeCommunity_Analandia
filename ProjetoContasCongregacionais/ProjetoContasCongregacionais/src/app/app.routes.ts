import { Routes } from '@angular/router';
import { RecibosCadasComponent } from './componentes/cadastros/recibos-cadas/recibos-cadas.component';
import { RecibosDashboardComponent } from './componentes/recibos-dashboard/recibos-dashboard.component';

export const routes: Routes = [
  // primeira rotas de acesso na aplicação full
  {
    path: '',
    redirectTo: 'dashboardRecibos',
    pathMatch: 'full',
  },

  {
    path: 'dashboardRecibos',
    component: RecibosDashboardComponent,
  },

  {
    path: 'cadasRecibo',
    component: RecibosCadasComponent,
  },

  // Vou criar uma rota para editar o recibo
  {
    path: 'editarRecibo/:id',
    component: RecibosCadasComponent,
  }

];
