import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <a class="Container" [routerLink]="path">
      <img class="Container-icon" [src]="icon" [alt]="'navegar a '+label">
      {{ label }}
    </a>
  `,
  styleUrl: './route.component.scss',
})

export class RouteComponent {
  @Input() icon?: string;
  @Input() label?: string;
  @Input() path?: string;
  constructor() {}
}
