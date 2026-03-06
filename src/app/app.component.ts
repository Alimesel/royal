import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Initialise IntersectionObserver for .reveal elements
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    // Observe immediately + re-observe when menu grid re-renders (category change)
    observe();
    window.addEventListener('royal-category', () => setTimeout(observe, 200));
    window.addEventListener('royal-search',   () => setTimeout(observe, 200));
  }
}
