import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './molecule/route/route.component';
import { Route } from '../../../../interfaces/route.interface';
import { AuthService } from '../../../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouteComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {



  constructor(
    private readonly authService: AuthService,
    // private readonly cookies: CookieService,
    private readonly routerNavigation: Router
  ){
  }
    
  routesDashboard: Route[]= [
    {
      icon: this.getIconByName('home'),
      path: "/dashboard",
      label: "Inicio"
    },
    {
      icon: this.getIconByName('card'),
      path: "cards",
      label: "Tarjetas"
    },
    {
      icon: this.getIconByName('prestamo'),
      path: "loans",
      label: "Prestamos"
    },
    {
      icon: this.getIconByName('transferencia'),
      path: "operations",
      label: "Operaciones"
    },
    {
      icon: this.getIconByName('plane'),
      path: "benefits",
      label: "Te ofrecemos"
    },
    {
      icon: this.getIconByName('shield'),
      path: "insurance",
      label: "Seguros"
    },
    {
      icon: this.getIconByName('gift'),
      path: "points",
      label: "Puntos"
    },
    {
      icon: this.getIconByName('quest'),
      path: "help",
      label: "Ayuda"
    },
  ]

  logOut(value:boolean){
    this.authService.logOut().subscribe(
      (value)=>{
        alert(value?.message)
        
      }
    )
    ;
  }

  getIconByName(name_icon: string):string{
    return `../../../../../assets/svg/${name_icon}.svg`
  }

}
