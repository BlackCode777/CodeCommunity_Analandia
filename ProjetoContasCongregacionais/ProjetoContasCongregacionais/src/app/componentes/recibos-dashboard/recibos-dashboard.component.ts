import { CommonModule } from '@angular/common';
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

    FormsModule,
    ReactiveFormsModule,
    RecibosCadasComponent,
  ],
  templateUrl: './recibos-dashboard.component.html',
  styleUrl: './recibos-dashboard.component.scss',
})
export class RecibosDashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  public dataDoMes: Date = new Date(); // Como pegar o mes corrente

  ngOnInit() {}

  novoRecibo() {
    console.log('Novo recibo');
    this.router.navigate(['novoRecibo']);
  }
}
