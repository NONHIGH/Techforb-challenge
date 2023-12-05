import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './atoms/card/card.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
