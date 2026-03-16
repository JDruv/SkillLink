import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../directives/fade-in-up/fade-in-up.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

}
