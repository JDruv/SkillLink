import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkBackgroundComponent } from './components/network-background/network-background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { MatchingComponent } from './components/matching/matching.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { WaitlistComponent } from './components/waitlist/waitlist.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NetworkBackgroundComponent,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    MatchingComponent,
    TechStackComponent,
    RoadmapComponent,
    WaitlistComponent,
    FooterComponent,
    ModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isModalOpen = false;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target && target.closest('.interaction-trigger')) {
      event.preventDefault();
      this.isModalOpen = true;
    }
  }
}
