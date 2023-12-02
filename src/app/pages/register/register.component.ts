import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { clue, document_number, type_document, email, last_name, name } from '../../constans'
import { AuthRegister } from '../../interfaces/Auth.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  protected registerForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    ) {
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
    const documentType = this.registerForm.get(type_document)?.value;
      const numberDocument = this.registerForm.get(document_number)?.value;
      const password = this.registerForm.get(clue)?.value;
      const username = this.registerForm.get(name)?.value;
      const lastname = this.registerForm.get(last_name)?.value;
      const emailu = this.registerForm.get(email)?.value;
      const registerForm : AuthRegister = {
        document_number: numberDocument,
        email: emailu,
        password,
        name: username,
        lastname,
        type_document:documentType
      }
    const response = this.authService.register(registerForm).subscribe({
      next: value=> this.router.navigate(['/dashboard']),
      error: err => alert("error" + JSON.stringify(err)),
      complete: () => console.log("complete call to api")
    })
    
  }


}
