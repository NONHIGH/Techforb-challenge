import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  protected loginForm!: FormGroup;
  public name?: any = this.loginForm?.get('name');

  constructor(private readonly formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
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
        [Validators.minLength(8), Validators.maxLength(8), Validators.required],
      ],
      clue: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(40),
          Validators.required,
        ],
      ],
    });
  }

  onSubmit(): void {
    //enviar llamado al servicio y realizar acciones ante una invalides de los datos
  }
}
