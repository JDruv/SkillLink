import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '.fade-in-up',
    standalone: true
})
export class FadeInUpDirective implements OnInit, OnDestroy {
    private observer!: IntersectionObserver;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(entry.target, 'visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
