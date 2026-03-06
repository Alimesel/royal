import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dish } from '../../models/dish.model';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dish-modal',
  templateUrl: './dish-modal.component.html',
  styleUrls: ['./dish-modal.component.css'],
})
export class DishModalComponent implements OnInit, OnDestroy {
  dish: Dish | null = null;
  isOpen = false;

  private listener = (e: Event) => {
    const id = (e as CustomEvent).detail as number;
    this.dish = this.menuService.getDishById(id) ?? null;
    this.isOpen = !!this.dish;
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  };

  constructor(private menuService: MenuService, private cartService: CartService) {}

  ngOnInit(): void  { window.addEventListener('royal-modal', this.listener); }
  ngOnDestroy(): void { window.removeEventListener('royal-modal', this.listener); }

  get allergenData(): Array<{ icon: string; label: string }> {
    return this.dish?.allergens.map(a =>
      this.menuService.allergens[a] ?? { icon: 'fas fa-triangle-exclamation', label: a }
    ) ?? [];
  }

  get stars(): boolean[] {
    if (!this.dish) return [];
    return Array.from({ length: 5 }, (_, i) => i < Math.round(this.dish!.rating));
  }

  get nutrition(): { calories: number; protein: string; fat: string; carbs: string } | null {
    if (!this.dish) return null;
    return {
      calories: this.dish.calories,
      protein:  Math.round(this.dish.calories * 0.15) + 'g',
      fat:      Math.round(this.dish.calories * 0.12) + 'g',
      carbs:    Math.round(this.dish.calories * 0.35) + 'g',
    };
  }

  addToCart(): void {
    if (!this.dish) return;
    this.cartService.addItem({ id: this.dish.id, name: this.dish.name, price: this.dish.price, image: this.dish.image });
    this.close();
  }

  close(): void {
    this.isOpen = false;
    this.dish = null;
    document.body.style.overflow = '';
  }

  onOverlayClick(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) this.close();
  }
}
