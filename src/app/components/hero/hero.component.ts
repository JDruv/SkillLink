import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../directives/fade-in-up/fade-in-up.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
