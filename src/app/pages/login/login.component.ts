import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './molecules/login-form/login-form.component';
import { Router, RouterLink } from '@angular/router';
import { AuthLogin } from '../../interfaces/Auth.interface'
import { FormGroup } from '@angular/forms';
import { clue, document_number, type_document } from '../../constans/index';
import { AuthService } from '../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly cookiesService: CookieService
    ){}

  login(form: FormGroup) :void {
      const documentType = form.get(type_document)?.value;
      const numberDocument = form.get(document_number)?.value;
      const password = form.get(clue)?.value;
      const loginForm : AuthLogin = {
        password,
        document_number:numberDocument,
        type_document: documentType.toUpperCase()
      }
      
      const res = this.authService.login(loginForm).subscribe({
        next: value => {
          const expirationCookie = new Date();
          expirationCookie.setDate(expirationCookie.getDate() + 7);
          this.cookiesService.set("session", value+"", expirationCookie, '/');
          this.router.navigate(['/dashboard']);
      },
        error: err => {
          const status = err.status;
          status == 401 && alert("Credenciales invalidas");
          status == 500 && alert("Error inesperado, llame al servicio de atención al cliente: numero ficticio");
          return;
        }
        ,
        complete: () => console.log('se completo la peticion')
      })
      
  }


}
