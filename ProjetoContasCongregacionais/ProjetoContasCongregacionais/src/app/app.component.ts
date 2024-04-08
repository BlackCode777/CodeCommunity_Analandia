import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RecibosCadasComponent } from './componentes/cadastros/recibos-cadas/recibos-cadas.component';
import { RecibosDashboardComponent } from './componentes/recibos-dashboard/recibos-dashboard.component';
import { ReciboDashboardService } from './service/recibo-dashboard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    RouterOutlet,
    FontAwesomeModule,
    ButtonModule,
    RippleModule,

    //provideHttpClient(withFetch()),

    // Importando os componentes
    RecibosCadasComponent,
    RecibosDashboardComponent,
  ],
  providers: [ReciboDashboardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ProjetoContasCongregacionais';
}


