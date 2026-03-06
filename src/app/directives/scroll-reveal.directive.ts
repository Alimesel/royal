import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[appScrollReveal]' })
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            this.observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => {
      this.observer.observe(el);
    });
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
