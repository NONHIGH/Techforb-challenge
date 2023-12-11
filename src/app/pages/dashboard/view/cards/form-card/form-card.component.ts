import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardService } from '../../../../../services/card.service';
import { Card } from '../../../../../interfaces/Card.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-card.component.html',
  styleUrl: './form-card.component.scss',
})
export class FormCardComponent {
  protected cardForm!: FormGroup;

  @Input() showForm : boolean | null = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly cardService: CardService,
    private readonly toastrService: ToastrService,

  ) {
    this.cardForm = this.formBuilder.group({
    dueDate: ['', [Validators.required, Validators.pattern(/^(19|20)\d{2}-(0[1-9]|1[0-2])$/)]],
      headline: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      numberCard: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      securityCode: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      balance: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }

  onSubmit(): void {

      const newCard : Card = this.cardForm.value;

      newCard.dueDate += "-01";
      
      this.cardService.addNewCard(newCard).subscribe({
        next: response => {
          // console.log(response);
          this.cardService.getAllCardsOfUser().subscribe({
            next: allCards => {
              this.toastrService.info("Datos actualizados");
            }
          })
          return ;
        },
        error: err => {
          console.log(err);
          
        }
      })
  }

}
