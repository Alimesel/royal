import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  featuredImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=90',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=90',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=90',
  ];
  currentBg = 0;

  floatingDishes = [
    { image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=200&q=80', label: 'Wagyu' },
    { image: 'https://images.unsplash.com/photo-1513125370-3460ebe3401b?auto=format&fit=crop&w=200&q=80', label: 'Oysters' },
    { image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80', label: 'Dessert' },
    { image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=200&q=80', label: 'Drinks' },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.currentBg = (this.currentBg + 1) % this.featuredImages.length;
    }, 5000);
  }

  ngAfterViewInit(): void {}

  scrollToMenu(): void {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
