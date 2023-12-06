import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() dueDate: any | null = null;
  @Input() balance: number | null = null;
  @Input() headline: string | null = null;
  @Input() numberCard: number | null = null;
}
