import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../directives/fade-in-up/fade-in-up.directive';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css'
})
export class RoadmapComponent {

}
