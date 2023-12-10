import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <a class="Container" [routerLink]="path ? path : ''" routerLinkActive="onRoute" [routerLinkActiveOptions]="{exact: true}" (click)="emitAction()">
      <img class="Container-icon" [src]="icon" [alt]="'navegar a '+label">
      {{ label }}
    </a>
  `,
  styles: `
  @import "../../../../../../../styles/base.scss";
  .Container {
    margin-left:1rem;
    display: flex;
    align-items:center;
    gap: 1rem;
    padding: .5rem;
    
    img{
      width: auto;
      max-width: 20%;
    }
  }
  .onRoute{
    margin-left:14%;
    img{
      border-radius: 50%;
      background: $primary-1;
      padding: .5rem;
    }
  }
  `
})

export class RouteComponent {
  @Input() icon?: string;
  @Input() label?: string;
  @Input() path?: string;
  
  @Output() action: EventEmitter<boolean> = new EventEmitter<any>();

  
  constructor() {}

  emitAction(){
    if(!this.path){
      this.action.emit(true);
    }
  }

}
