import { Component, Input } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css'],
})
export class DishCardComponent {
  @Input() dish!: Dish;
  isFav = false;

  constructor(private cartService: CartService, private menuService: MenuService) {}

  get categoryName(): string {
    return this.menuService.categories.find(c => c.id === this.dish.cat)?.name ?? this.dish.cat;
  }

  get allergenData(): Array<{ icon: string; label: string }> {
    return this.dish.allergens.slice(0, 5).map(a =>
      this.menuService.allergens[a] ?? { icon: 'fas fa-triangle-exclamation', label: a }
    );
  }

  get stars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(this.dish.rating));
  }

  addToCart(e: Event): void {
    e.stopPropagation();
    this.cartService.addItem({ id: this.dish.id, name: this.dish.name, price: this.dish.price, image: this.dish.image });
  }

  toggleFav(e: Event): void {
    e.stopPropagation();
    this.isFav = !this.isFav;
    if (this.isFav) this.cartService.notify(`${this.dish.name} added to favourites`);
  }

  openModal(): void {
    window.dispatchEvent(new CustomEvent('royal-modal', { detail: this.dish.id }));
  }
}

