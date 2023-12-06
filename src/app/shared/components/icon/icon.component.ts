import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconProps } from '../../../interfaces/icon.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

  @Input() iconProps!: IconProps;
  
}
