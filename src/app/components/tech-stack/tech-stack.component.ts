import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../directives/fade-in-up/fade-in-up.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {

}
