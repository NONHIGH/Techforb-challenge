import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCardComponent } from './form-card/form-card.component';
import { CardService } from '../../../../services/card.service';
import { CardDTO } from '../../../../interfaces/Card.interface';
import { CardComponent } from '../principal/atoms/card/card.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormCardComponent, CardComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  allCards : CardDTO[] = []
  constructor(
    private readonly cardService: CardService,

  ){
    this.cardService.allcards$.subscribe(
      (value)=>{
        if(value == null){
          return;
        }
        this.allCards = value;
      }
    )
  }

  isOpenForm: boolean = false;
  openOrClose: string = "Abrir formulario"

  openForm(beforeValue: boolean){
      this.isOpenForm = !beforeValue;
      this.openOrClose = beforeValue ? "Abrir formulario" : "Cerrar formulario"
    
  }


}
