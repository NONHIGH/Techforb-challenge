import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  protected registerForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.pattern(/^[A-Za-z\s]+$/), Validators.required]],
      lastname: ['', [Validators.pattern(/^[A-Za-z\s]+$/), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      type_document: [
        '',
        [
          Validators.minLength(3),
          Validators.maxLength(9),
          Validators.pattern(/^(DNI|PASAPORTE)$/i),
          Validators.required,
        ],
      ],
      document_number: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(8),
          Validators.pattern(/^\d{8}$/),
          Validators.required
        ],
      ],
      clue: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(40),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
          Validators.required,
        ],
      ],
    });
  }

  onSubmit():void{
    //hacer algo,
    console.log('este es el formulario', this.registerForm);
    alert('enviado al backend')
  }


}
