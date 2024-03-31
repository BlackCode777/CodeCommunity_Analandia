import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './recibos-cadas.component.html',
  styleUrl: './recibos-cadas.component.scss',
})
export class RecibosCadasComponent {}
