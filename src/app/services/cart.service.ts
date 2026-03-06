import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/dish.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = new BehaviorSubject<CartItem[]>([]);
  private _isOpen = new BehaviorSubject<boolean>(false);
  private _notification = new BehaviorSubject<string>('');

  items$ = this._items.asObservable();
  isOpen$ = this._isOpen.asObservable();
  notification$ = this._notification.asObservable();

  get totalItems(): number {
    return this._items.value.reduce((sum, i) => sum + i.qty, 0);
  }

  get totalPrice(): number {
    return this._items.value.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  addItem(item: Omit<CartItem, 'qty'>): void {
    const current = this._items.value;
    const existing = current.find(i => i.id === item.id);
    if (existing) {
      this._items.next(current.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      this._items.next([...current, { ...item, qty: 1 }]);
    }
    this.notify(`${item.name} added to order`);
  }

  changeQty(id: string | number, delta: number): void {
    const current = this._items.value;
    const updated = current.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0);
    this._items.next(updated);
  }

  removeItem(id: string | number): void {
    this._items.next(this._items.value.filter(i => i.id !== id));
  }

  clearCart(): void {
    this._items.next([]);
  }

  toggleCart(): void {
    this._isOpen.next(!this._isOpen.value);
  }

  openCart(): void  { this._isOpen.next(true);  }
  closeCart(): void { this._isOpen.next(false); }

  private notifTimer: any;
  notify(msg: string): void {
    this._notification.next(msg);
    clearTimeout(this.notifTimer);
    this.notifTimer = setTimeout(() => this._notification.next(''), 2800);
  }
}
