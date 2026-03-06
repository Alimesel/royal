import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  isDark = true;
  mobileOpen = false;
  cartCount = 0;
  searchQuery = '';

  constructor(private cartService: CartService, private menuService: MenuService) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.cartCount = items.reduce((s, i) => s + i.qty, 0);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  toggleCart(): void { this.cartService.toggleCart(); }
  toggleMobile(): void { this.mobileOpen = !this.mobileOpen; }
  closeMobile(): void  { this.mobileOpen = false; }

  onSearch(): void {
    // Emit search event via service or shared state
    if (this.searchQuery.trim()) {
      const results = this.menuService.searchDishes(this.searchQuery);
      (window as any).__royalSearch = results;
      window.dispatchEvent(new CustomEvent('royal-search', { detail: results }));
    } else {
      window.dispatchEvent(new CustomEvent('royal-search', { detail: null }));
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMobile();
  }
}
