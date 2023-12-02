import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './molecule/route/route.component';
import { Route } from '../../../../interfaces/route.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouteComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  routesDashboard: Route[]= [
    {
      icon: "",
      path: "/dashboard",
      label: "Inicio"
    },
    {
      icon: "",
      path: "/dashboard",
      label: "Inicio"
    },
    {
      icon: "",
      path: "/dashboard",
      label: "Inicio"
    },
    {
      icon: "",
      path: "/dashboard",
      label: "Inicio"
    },
    {
      icon: "",
      path: "/dashboard",
      label: "Inicio"
    },
    {
      icon: "",
      path: "/dashboard",
      label: "Inicio"
    },
    
  ]
}
