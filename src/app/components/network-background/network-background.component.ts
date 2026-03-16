import { Component, ElementRef, ViewChild, AfterViewInit, NgZone, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;

  constructor(width: number, height: number, moveSpeed: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * moveSpeed;
    this.vy = (Math.random() - 0.5) * moveSpeed;
    this.size = Math.random() * 2 + 1;
    this.color = Math.random() > 0.5 ? '#00b4d8' : '#007bff';
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

@Component({
  selector: 'app-network-background',
  standalone: true,
  imports: [CommonModule],
  template: '<canvas #networkCanvas id="network-canvas"></canvas>'
})
export class NetworkBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('networkCanvas') networkCanvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private width!: number;
  private height!: number;
  private particles: Particle[] = [];
  private particleCount!: number;
  private connectionDistance = 150;
  private moveSpeed = 0.5;
  private animationFrameId!: number;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    this.ctx = this.networkCanvas.nativeElement.getContext('2d')!;
    this.resize();
    this.initParticles();

    // Eseguito fuori dalla NgZone per non attivare change detection query su ogni frame
    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.resize();
    this.initParticles();
  }

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.networkCanvas.nativeElement.width = this.width;
    this.networkCanvas.nativeElement.height = this.height;
    this.particleCount = this.width < 768 ? 30 : 60;
  }

  private initParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.width, this.height, this.moveSpeed));
    }
  }

  private animate = () => {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.particles.forEach(p => {
      p.update(this.width, this.height);
      p.draw(this.ctx);
    });

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 180, 216, ${1 - distance / this.connectionDistance})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
