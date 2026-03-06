import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/dish.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.css'],
})
export class CartSidebarComponent {
  items$: Observable<CartItem[]>;
  isOpen$: Observable<boolean>;

  constructor(public cartService: CartService) {
    this.items$ = cartService.items$;
    this.isOpen$ = cartService.isOpen$;
  }

  get total(): number { return this.cartService.totalPrice; }

  changeQty(id: string | number, delta: number): void { this.cartService.changeQty(id, delta); }
  close(): void { this.cartService.closeCart(); }

  placeOrder(): void {
    this.cartService.clearCart();
    this.cartService.closeCart();
    this.cartService.notify('Order placed! Our team will attend to you shortly. 🍽️');
  }

  trackById(_: number, item: CartItem): string | number { return item.id; }
}
