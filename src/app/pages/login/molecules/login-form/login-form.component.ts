import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() form = new EventEmitter<FormGroup>();

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
        [
          Validators.minLength(8),
          Validators.maxLength(8),
          Validators.pattern(/^\d{8}$/),
          Validators.required,
        ],
      ],
      clue: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(40),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
          Validators.required,
        ],
      ],
    });
  }

  onSubmit(): void {
    this.form?.emit(this.loginForm);
  }
}
