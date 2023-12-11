import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './atoms/card/card.component';
import { HeaderComponent } from './atoms/header/header.component';
import { ChartComponent } from '../../../../shared/components/chart/chart.component';
import { TransactionService } from '../../../../services/transaction.service';
import { CardService } from '../../../../services/card.service';
import { CardDTO } from '../../../../interfaces/Card.interface';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, CardComponent, HeaderComponent, ChartComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {
  [x: string]: any;

  allCards: CardDTO[] = [];
  constructor(
    private readonly transactionService: TransactionService,
    private readonly cardService: CardService
  ) {
    this.cardService.allcards$.subscribe((value) => {
      if(value == null){
        return 
      }
      this.allCards = value;
    });
  }

  chartData = {
    chart: {
      caption: 'Balance de Envíos',
      subCaption: 'Monto de transacciones realizadas',
      theme: 'fusion',
    },
    data: [
      { label: 'Enero', value: '1000' },
      { label: 'Febrero', value: '1500' },
    ],
  };
}
