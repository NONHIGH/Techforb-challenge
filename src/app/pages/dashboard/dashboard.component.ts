import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './molecules/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../interfaces/UserDTO.interface';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private user: UserDTO | null = null;

  constructor(
    private readonly userService: UserService,
    private readonly cardService: CardService
  ) {}
  ngOnInit(): void {
    this.userService.usuario$.subscribe((user) => {
      this.user = user;
      if (user == null) {
        this.userService.getUser().subscribe((value) => {
          this.user = value;
        });
      }
    });
    this.cardService.getAllCardsOfUser().subscribe((value) => {
      console.log(value, 'cards');
    });
  }
}
