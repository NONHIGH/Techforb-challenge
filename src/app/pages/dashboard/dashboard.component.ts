import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
}
