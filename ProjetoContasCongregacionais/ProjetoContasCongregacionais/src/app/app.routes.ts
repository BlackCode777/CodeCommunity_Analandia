import { Routes } from '@angular/router';
import { RecibosCadasComponent } from './componentes/cadastros/recibos-cadas/recibos-cadas.component';
import { RecibosDashboardComponent } from './componentes/recibos-dashboard/recibos-dashboard.component';

export const routes: Routes = [
  // rotas
  {
    path: 'dashboardRecibos',
    component: RecibosDashboardComponent,
  },

  {
    path: 'novoRecibo',
    component: RecibosCadasComponent,
  },
];
