import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CardService } from '../../../../services/card.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  protected cardForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cardService: CardService
  ){
    this.cardForm = this.formBuilder.group({
      dueDate: ['', [Validators.required]],
      headline: ['', [Validators.required]],
      numberCard: ['', [Validators.required]],
      securityCode: ['', [Validators.required]],
      balance: ['', [Validators.required]],
    });
  }
  onSubmit():void{
    const newCard = this.cardForm.value;
    
    console.log(newCard);

    this.cardService.addNewCard(newCard);

  }


}
