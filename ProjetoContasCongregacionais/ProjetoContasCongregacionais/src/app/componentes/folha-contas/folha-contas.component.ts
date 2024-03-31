import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-folha-contas',
  standalone: true,
  imports: [
    CommonModule,

    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './folha-contas.component.html',
  styleUrl: './folha-contas.component.scss',
})
export class FolhaContasComponent {}
