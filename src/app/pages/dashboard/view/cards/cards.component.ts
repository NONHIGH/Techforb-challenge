import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './form-card/form-card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormCardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  isOpenForm: boolean = false;



}
