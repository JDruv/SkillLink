import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInUpDirective } from '../../directives/fade-in-up/fade-in-up.directive';

@Component({
  selector: 'app-waitlist',
  standalone: true,
  imports: [CommonModule, FadeInUpDirective],
  templateUrl: './waitlist.component.html',
  styleUrl: './waitlist.component.css'
})
export class WaitlistComponent {

}
