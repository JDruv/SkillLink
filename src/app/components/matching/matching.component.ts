import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../directives/fade-in-up/fade-in-up.directive';

@Component({
  selector: 'app-matching',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './matching.component.html',
  styleUrl: './matching.component.css'
})
export class MatchingComponent {

}
